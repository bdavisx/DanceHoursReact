import React from 'react';
import StudentListContainer from './studentListContainer';

class UserDashboard extends React.Component {
    fetchStudentList() {
        console.log("fetchStudentListCalled")
        return [{}];
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
