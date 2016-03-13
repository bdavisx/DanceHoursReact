import React, { Component, PropTypes } from 'react';
import {Button, Col, Grid, Label, Row, PageHeader } from 'react-bootstrap';
//import { connect } from 'react-redux';
import StudentHoursDonatedDetail from './testDetail.jsx';

class StudentListContainer extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor")
        this.studentList = this.props.fetchStudentList();
    }

    render() {
        console.log("Render " + this.studentList);
        return (
            <Grid>
                <Row className="vertical-align">
                    <Col xs={8}>
                        <PageHeader>Your Students <small>
                            <Button bsStyle="link">I want to add a student to my list</Button>
                        </small></PageHeader>
                    </Col>
                    <Col xs={4}>
                        <Label bsStyle="success">Session:</Label>
                        <Button bsStyle="link">mm/dd/yyyy to mm/dd/yyyy</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <table width="100%">
                            <thead>
                            <tr>
                                <th>Student</th>
                                <th>Hours Donated</th>
                                <th>Total Hours Needed</th>
                            </tr>
                            </thead>
                            <tbody>
                                { this.studentList.map( function(student) {
                                    return <StudentListDetail key={student.id} student={student}/> } ) }
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
StudentListContainer.propTypes = { fetchStudentList: React.PropTypes.func };

const StudentListDetail = ({student}) => {
    console.log("Student List Detail " + student.name)
    return <tr>
        <td>{student.name}</td>
        <td><StudentHoursDonatedDetail hoursDonated={student.hoursDonated}/></td>
        <td>{student.totalHoursNeeded}</td>
    </tr>
}
StudentListDetail.propTypes = { student: React.PropTypes.object };


export default StudentListContainer;

//render() {
//    const { students } = this.props.studentList;
//    const { currentSession } = this.props.currentSession;
//
//    if (!students) {
//        return <div>Loading...</div>;
//    }
//
//    return (
//        <Grid>
//            <Row>
//                <Col xs={4}><h1>Your Studens</h1></Col>
//                <Col xs={3}>Test</Col>
//            </Row>
//        </Grid>
//    );
//}
