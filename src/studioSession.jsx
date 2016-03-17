import React, { Component, PropTypes } from 'react';
import {Button} from 'react-bootstrap';

export class StudioSession extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor")
        this.handleClick = this.props.handleClick;
    }

    render() {
        return <span>
            <Button onClick={this.props.handleClick} bsStyle="success" bsSize="small">Session:</Button>
            <Button onClick={this.props.handleClick} bsStyle="link">mm/dd/yyyy to mm/dd/yyyy</Button>
        </span>;
    }
}
StudioSession.propTypes = { handleSessionClick: React.PropTypes.func };

