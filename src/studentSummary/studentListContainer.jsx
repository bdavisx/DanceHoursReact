import React, {Component, PropTypes} from "react";
import {Button, Col, Grid, Row, PageHeader} from "react-bootstrap";
import {StudioSession} from "./../studioSession.jsx";
import StudentListTable from "./studentListTable.jsx";

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


export default StudentListContainer;
