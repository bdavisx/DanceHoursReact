import React from 'react';
import ReactDOM from 'react-dom';
import UserDashboard from './userDashboard.jsx'

class Main extends React.Component {
    render() {
        return <div>
            <UserDashboard/>
        </div>
    }
}

ReactDOM.render(<Main/>, document.getElementById('main'));
