import React from 'react';
import '../styles/dashboard/login.css'; 
import axios from 'axios'; 

class Login extends React.Component{
    render(){
        return(
                <div id = 'login' className = 'login_container'>
                    <div> 
                        <span>
                            <img src ={require('../images/login.png')} alt = '' />
                            <h1>Login to your account</h1>
                        </span>
                        <form>
                            <div className = 'form-group'>
                                <input type = 'text' name = 'username' className = 'form-control' 
                                    value = {this.props.login.username} onChange = {this.props.login.change}
                                    placeHolder = "username"
                                />
                            </div>
                            <div className = 'form-group'>
                                <input type = 'password' name = 'password' className = 'form-control' 
                                    value = {this.props.login.password} onChange = {this.props.login.change}
                                    placeHolder = "password"
                            />
                            </div>
                            <input type = 'submit' className = 'btn btn-block btn-primary' 
                                value = 'login' onClick = {this.props.login.submit}
                            />
                        </form>
                    </div>
                </div>
        )
    }
}

export default Login; 