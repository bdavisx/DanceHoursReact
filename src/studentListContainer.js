import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
//import { connect } from 'react-redux';

class StudentListContainer extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor")
        this.studentList = this.props.fetchStudentList();
    }

    componentDidMount() {
        console.log("componentDidMount")
        console.log("Component Did Mount " + this.studentList);
    }

    render() {
        console.log("Render " + this.studentList);
        return (
            <Grid>
                <Row>
                    <Col xs={4}><h1>Your Students</h1></Col>
                    { this.studentList.map( (student) => {
                        return <div key={student.id}>{student.name}</div>;
                    })}
                </Row>
            </Grid>
        );
    }
}
StudentListContainer.propTypes = { fetchStudentList: React.PropTypes.func };

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
