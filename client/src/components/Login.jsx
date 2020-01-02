import React from 'react';
import '../styles/dashboard/login.css'; 
import axios from 'axios'; 

class Login extends React.Component{
    state = {
        form: 1
    }

    toggle_form = () => {
        this.setState({ form: 1 }); 
        if(this.state.form === 1){
            this.setState({ form: 0 }); 
        }
    }

    render(){
        const register = (
            <form>
                <div className = 'form-group'>
                    <input type = 'text' name = 'username' className = 'form-control' 
                        value = {this.props.login.username} onChange = {this.props.login.change}
                        placeHolder = "username"
                    />
                </div>
                <div className = 'form-group'>
                    <input type = 'text' name = 'password' className = 'form-control' 
                        value = {this.props.login.password} onChange = {this.props.login.change}
                        placeHolder = "password"
                    />
                </div>
                <div className = 'form-group'>
                    <input type = 'text' name = 'email' className = 'form-control' 
                        value = {this.props.login.email} onChange = {this.props.login.change}
                        placeHolder = "email"
                    />
                </div>
                <input type = 'submit' className = 'btn btn-block btn-primary' 
                    value = 'register' onClick = {this.props.login.register}
                />
                <button className = 'btn btn-primary btn-block' onClick = {this.toggle_form}
                >Back</button>
            </form>
        );

        return(
                <div id = 'login' className = 'login_container'>
                    <div> 
                        <span>
                            <img src ={require('../images/login.png')} alt = '' />
                            {this.state.form ? <h1>Login to your account</h1> : <h1>Register a new account</h1>}
                        </span>
                        { this.state.form ? <form>
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
                            <button className = 'btn btn-primary btn-block' onClick = {this.toggle_form}
                            >Register</button>
                        </form> : register }
                    </div>
                </div>
        )
    }
}

export default Login; 