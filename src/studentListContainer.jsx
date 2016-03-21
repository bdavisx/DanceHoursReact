import React, { Component, PropTypes } from 'react';
import {Button, Col, Grid, Label, Row, PageHeader } from 'react-bootstrap';
import {StudioSession} from './studioSession.jsx';

//import { connect } from 'react-redux';

class StudentListContainer extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor")
        // TODO: needs to be incorporated into state, fetchStudentList needs to be observable/RX
        this.studentList = this.props.fetchStudentList();
    }

    render() {
        console.log("Render " + this.studentList);
        return (
            <Grid>
                <Row className="vertical-align">
                    <Col xs={8}>
                        <PageHeader>Your Students
                            <small>
                                <Button bsStyle="link">I want to add a student to my list</Button>
                            </small>
                        </PageHeader>
                    </Col>
                    <Col xs={4}>
                        <StudioSession handleClick={this.props.handleSessionClick} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <StudentListTable studentList={this.studentList}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
StudentListContainer.propTypes = {
    handleSessionClick: React.PropTypes.func,
    fetchStudentList: React.PropTypes.func
};

const StudentListTable = ({studentList}) => {
    return <table width="100%" style={{borderCollapse: 'separate', borderSpacing: '10px'}}>
        <thead>
        <tr>
            <th>Student</th>
            <th>Hours Donated</th>
            <th>Total Hours Needed</th>
        </tr>
        </thead>
        <tbody>
        { studentList.map( function(student) {
            return <StudentListDetail key={student.id} student={student}/> } ) }
        </tbody>
    </table>
}
StudentListTable.propTypes = {
    studentList: React.PropTypes.array
}

const StudentListDetail = ({student}) => {
    return <tr key={student.id}>
        <td>{student.name}</td>
        <td>
            <StudentHoursDonatedDetail key={student.id} hoursDonated={student.hoursDonated}
                totalHoursNeeded={student.totalHoursNeeded}/>
        </td>
        <td>{student.totalHoursNeeded}</td>
    </tr>
}
StudentListDetail.propTypes = { student: React.PropTypes.object };

const StudentHoursDonatedDetail = ({hoursDonated, totalHoursNeeded}) => {
    return (<table width="100%"><tbody><tr>{ hoursDonated.map(function (hours) {
        var fullStyle = buildBarStyle(hours, totalHoursNeeded);
        return <td key={hours.name} style={fullStyle}>
            {hours.name} ({hours.howManyHours})
        </td>;
    })}</tr></tbody></table>);

    function buildBarStyle(hours, totalHoursNeeded) {
        var widthPercentage = determineHoursWidthPercentage(hours, totalHoursNeeded);
        var styleColor = determineStyleColor(hours.name);

        var fullStyle = {
            width: widthPercentage,
            background: styleColor,
            border: '1px solid #999',
            padding: '0.25rem'
        }
        return fullStyle;
    }

    function determineHoursWidthPercentage(hours, totalHoursNeeded) {
        var theWidth = hours.howManyHours / totalHoursNeeded * 100;
        var widthPercentage = theWidth + '%';
        return widthPercentage;
    }

    function determineStyleColor(name) {
        var styleColor = '';
        switch (name) {
            case 'Your Hours':
                styleColor = 'lightgreen';
                break;
            case 'Others':
                styleColor = '#bdb76b';
                break;
            case 'Remaining':
                styleColor = '#d3d3d3';
                break;
        }
        return styleColor;
    }

}
StudentHoursDonatedDetail.propTypes = {
    hoursDonated: React.PropTypes.array,
    totalHoursNeeded: React.PropTypes.number,
};

export default StudentListContainer;
