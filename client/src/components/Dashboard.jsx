import React from 'react';
import '../styles/dashboard/dashboard.css'; 
import axios from 'axios'; 

class Dashboard extends React.Component{
render(){
        return(
            <div id = 'dashboard_parent_container'>
                <div className = 'login_container'>
                    <form>
                        <div className = 'form-group'>
                            <input type = 'text' name = 'username' className = 'form-control' 
                            value = {this.props.username} onChange = {this.props.change}
                            />
                        </div>
                        <div className = 'form-group'>
                            <input type = 'password' name = 'password' className = 'form-control' 
                            value = {this.props.password} onChange = {this.props.change}
                            />
                        </div>
                        <input type = 'submit' className = 'btn btn-block btn-success' 
                        value = 'login' onClick = {this.props.submit}
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default Dashboard; 