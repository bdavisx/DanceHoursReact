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
    return <table width="100%">
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
    studentList: React.PropTypes.array.required
}

const StudentListDetail = ({student}) => {
    console.log("Student List Detail " + student.name)
    return <tr key={student.name}>
        <td>{student.name}</td>
        <td><StudentHoursDonatedDetail hoursDonated={student.hoursDonated}/></td>
        <td>{student.totalHoursNeeded}</td>
    </tr>
}
StudentListDetail.propTypes = { student: React.PropTypes.object };

const StudentHoursDonatedDetail = ({hoursDonated}) => {
    return <span>{ hoursDonated.map(function (hours) {
        return <span key={hours.name}><span>{hours.name}</span><span>{hours.howManyHours}</span></span>;
    })}</span>;
}
StudentHoursDonatedDetail.propTypes = { hoursDonated: React.PropTypes.array };

export default StudentListContainer;
