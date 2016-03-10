import React from 'react';
import StudentListContainer from './studentListContainer';

class UserDashboard extends React.Component {
    fetchStudentList() {
        console.log("fetchStudentListCalled")
        return [
            { id: "abc", name: "Student 1"},
            { id: "def", name: "Student 2"}
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
