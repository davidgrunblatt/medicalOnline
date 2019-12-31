import React from 'react';
import '../styles/dashboard/login.css'; 
import axios from 'axios'; 

function Login(props){
    return(
        <div id = 'login' >
            <div className = 'login_container'>
                <div>
                    <span>
                        <img src ={require('../images/login.png')} alt = '' />
                        <h1>Login to your account</h1>
                    </span>
                    <form>
                        <div className = 'form-group'>
                            <input type = 'text' name = 'username' className = 'form-control' 
                                value = {props.login.username} onChange = {props.login.change}
                                placeHolder = "username"
                            />
                        </div>
                        <div className = 'form-group'>
                            <input type = 'password' name = 'password' className = 'form-control' 
                                value = {props.login.password} onChange = {props.login.change}
                                placeHolder = "password"
                        />
                        </div>
                        <input type = 'submit' className = 'btn btn-block btn-primary' 
                            value = 'login' onClick = {props.login.submit}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login; 