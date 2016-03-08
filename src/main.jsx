import React from 'react';
import ReactDOM from 'react-dom';
import UserDashboard from './userDashboard.jsx'

class Main extends React.Component {
    render() {
        return <div>
            <h1>Hello</h1>
            <UserDashboard/>
        </div>
    }
}

ReactDOM.render(<Main/>, document.getElementById('main'));
