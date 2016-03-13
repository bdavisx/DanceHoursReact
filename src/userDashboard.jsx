import React from 'react';
import StudentListContainer from './studentListContainer.jsx';

class UserDashboard extends React.Component {
    fetchStudentList() {
        console.log("fetchStudentListCalled")
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
                    {name: "Your Hours", howManyHours: 5},
                    {name: "Remaining", howManyHours: 5, remaining: true}
                ],
                totalHoursNeeded: 15
            }
        ];
    }

    render() {
        return (
            <div>
                <StudentListContainer fetchStudentList={this.fetchStudentList}/>
            </div>
        );
    }
};

export default UserDashboard;
