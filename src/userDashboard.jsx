import React from 'react';
import StudentListContainer from './studentListContainer.jsx';

class UserDashboard extends React.Component {
    fetchStudentList() {
        console.log("fetchStudentList called.")
        return [
            {
                id: "abc",
                name: "Student 1",
                hoursDonated: [
                    {name: "Your Hours", howManyHours: 5},
                    {name: "Others", howManyHours: 2},
                    {name: "Remaining", howManyHours: 3, remaining: true}
                ],
                totalHoursNeeded: 12
            },
            {
                id: "def",
                name: "Student 2",
                hoursDonated: [
                    {name: "Your Hours", howManyHours: 4},
                    {name: "Remaining", howManyHours: 6, remaining: true}
                ],
                totalHoursNeeded: 15
            }
        ];
    }

    handleSessionClick() {
        console.log("handleSessionClick called.")
    }

    render() {
        return (
            <div>
                <StudentListContainer fetchStudentList={this.fetchStudentList}
                    handleSessionClick={this.handleSessionClick}/>
            </div>
        );
    }
};

export default UserDashboard;
