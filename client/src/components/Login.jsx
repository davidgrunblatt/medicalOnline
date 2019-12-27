import React from 'react';
import '../styles/dashboard/dashboard.css'; 
import axios from 'axios'; 

function Login(props){
    return(
        <div>
            <div className = 'login_container'>
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
                    <input type = 'submit' className = 'btn btn-block' 
                        value = 'login' onClick = {props.login.submit}
                    />
                </form>
            </div>
        </div>
    )
}

export default Login; 