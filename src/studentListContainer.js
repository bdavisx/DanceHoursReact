import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
//import { connect } from 'react-redux';

class StudentListContainer extends Component {
    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
    }

    update(e){
        //this.setState({
        //    red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
        //})
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.props.fetchStudentList();
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={4}><h1>Your Studens</h1></Col>
                    <Col xs={3}>Test</Col>
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
