
import React, {Component} from 'react';
import '../styles/contact.css'; 
import axios from 'axios'; 
import Joi from 'joi-browser'; 

class Contact extends Component{
    state = {
        name: '',
        subject: '',
        message: '',
        sent: false,
        error: ''
    }
    form_change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }); 
    }

    joi_funk = (e) => {
        e.preventDefault();
        const message_schema = {
            name: Joi.string().required(),
            subject: Joi.string().required(),
            message: Joi.string().min(10).required()
        }
        Joi.validate({
            name: this.state.name,
            subject: this.state.subject,
            message: this.state.message
        }, message_schema)
        .then( () => this.form_submit() )
        .catch( ex => {
            console.log(ex.details[0].message);
            const error = ex.details[0].message;
            this.setState({ error }); 
            alert(this.state.error); 
        } ); 
    }

    form_submit = async (e) => {
        // e.preventDefault();
        await axios.post('/api/nodemailer', {
            name: this.state.name,
            subject: this.state.subject,
            message: this.state.message
        })
        .then( data => {
            console.log('Email has been sent!', data);
            this.setState({ sent: true }); 

            setTimeout(() => {
                this.setState({
                    sent: false,
                    name: '',
                    subject: '',
                    message: ''
                })
            }, 3000);
        } )
        .catch( ex => console.log('Unable to send email:', ex) ); 
    }

    render(){
        return(
            <div id = 'contact_container'>
                <div>
                    <h1>Contact the Clinic</h1>
                    <form onSubmit = {this.joi_funk}>
                        <div className = 'form-group'>
                            <input type = 'text' name = 'name' onChange = {this.form_change}
                            className = 'form-control' value = {this.state.name} placeHolder = 'name' required/>
                        </div>
                        <div className = 'form-group'>
                            <input type = 'text' name = 'subject' onChange = {this.form_change}
                            className = 'form-control' value = {this.state.subject} placeHolder = 'subject' required/>
                        </div>
                        <div className = 'form-group'>
                            <textarea type = 'text' name = 'message' onChange = {this.form_change}
                            className = 'form-control' value = {this.state.message} placeHolder = 'message...'
                            required></textarea>
                        </div>
                        <input type = 'submit' className = 'btn btn-block btn-primary' 
                         value = {this.state.sent ? "Message Sent!" : "Send Message" }
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;