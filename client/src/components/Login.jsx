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
            <form onSubmit = {this.props.login.register}>
                <div className = 'form-group'>
                    <input type = 'text' name = 'username' className = 'form-control' 
                        value = {this.props.login.username} onChange = {this.props.login.change}
                        placeHolder = "username" required
                    />
                </div>
                <div className = 'form-group'>
                    <input type = 'password' name = 'password' className = 'form-control' 
                        value = {this.props.login.password} onChange = {this.props.login.change}
                        placeHolder = "password" required
                    />
                </div>
                <div className = 'form-group'>
                    <input type = 'text' name = 'email' className = 'form-control' 
                        value = {this.props.login.email} onChange = {this.props.login.change}
                        placeHolder = "email" required
                    />
                </div>
                <input type = 'submit' className = 'btn btn-block btn-primary' 
                    value = 'register'
                />
                <button className = 'btn btn-primary btn-block' onClick = {this.toggle_form}
                >Back</button>
            </form>
        );
        return(
                <div id = 'login' className = 'login_container global_size'>
                    <div> 
                        <span>
                            <img src ={require('../images/login.png')} alt = '' />
                            {this.state.form ? <h1>Login to your account</h1> : <h1>Register a new account</h1>}
                        </span>
                        { this.state.form ? <form onSubmit = {this.props.login.submit} >
                            <div className = 'form-group'>
                                <input type = 'text' name = 'username' className = 'form-control' 
                                    value = {this.props.login.username} onChange = {this.props.login.change}
                                    placeHolder = "username" required
                                />
                            </div>
                            <div className = 'form-group'>
                                <input type = 'password' name = 'password' className = 'form-control' 
                                    value = {this.props.login.password} onChange = {this.props.login.change}
                                    placeHolder = "password" required
                            />
                            </div>
                            <input type = 'submit' className = 'btn btn-block btn-primary' 
                                value = 'login'
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