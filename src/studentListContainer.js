import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
//import { connect } from 'react-redux';

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
                <Row>
                    <Col xs={4}><h1>Your Students</h1></Col>
                </Row>
                <Row>
                    <Col xs={8}> { this.studentList.map( function(student) {
                        return <StudentListDetail key={student.id} student={student}/> } ) }
                    </Col>
                </Row>
            </Grid>
        );
    }
}
StudentListContainer.propTypes = { fetchStudentList: React.PropTypes.func };

const StudentListDetail = (props) => {
    console.log("Student List Detail " + props.student.name)
    return <span>{props.student.name}</span>;
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
