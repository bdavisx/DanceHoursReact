import React, { Component, PropTypes } from 'react';
import {Button} from 'react-bootstrap';

/*
    TODO: I'm thinking we should further encapsulate the Studio Session Selection. Here an outside
    class is expected to pass in the click handler; but it seems that there should be a
    StudioSessionSelection kind of component and probably then a parent to that one and this one
    or this one handles the selection component - but that seems to not be SRP.
 */

export const StudioSession = ({handleClick}) => {
    return <span>
        <Button onClick={handleClick} bsStyle="success" bsSize="small">Session:</Button>
        <Button onClick={handleClick} bsStyle="link">mm/dd/yyyy to mm/dd/yyyy</Button>
    </span>;
}
StudioSession.propTypes = { handleClick: React.PropTypes.func };

