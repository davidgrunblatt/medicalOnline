
import React from 'react';

class Dashboard extends React.Component {
    state = {  }

    componentDidMount(){
        console.log("props from dashboard", this.props); 
    }
    render() { 
        return ( 
            <div>
                <h1>Your dashboard</h1>
            </div>
         );
    }
}
 
export default Dashboard;