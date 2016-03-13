import React from 'react';

class StudentHoursDonatedDetail extends React.Component {
    render() {
        return <span>{ this.props.hoursDonated.map(function (hours) {
            return <span><span>{hours.name}</span><span>{hours.howManyHours}</span></span>;
        })}</span>;
    }
}
//StudentHoursDonatedDetail.propTypes = { hoursDonated: React.PropTypes.array };

export default StudentHoursDonatedDetail;
