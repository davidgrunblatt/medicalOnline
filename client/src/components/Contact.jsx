import React from 'react';
import '../styles/contact/contact.css'; 

function Contact(props){
    return(
        <div>
            <div className = {'contact_container ' + props.style} >
                <form >
                  <h3>Contact Us</h3>
                    <div className = 'form-group'>
                        <input type = 'text' name = 'name' placeHolder = 'name' 
                        className = 'form-control' value = {props.contact.name}
                        onChange = { props.change } required
                        />
                    </div>
                    <div className = 'form-group'>
                        <input type = 'email' name = 'email' placeHolder = 'email' 
                        className = 'form-control' value = {props.contact.email}
                        onChange = { props.change } required
                        />
                    </div>
                    <div className = 'form-group'>
                        <input type = 'text' placeHolder = 'subject' name = 'subject'
                        className = 'form-control' value = {props.contact.subject}
                        onChange = { props.change }
                        />
                    </div>
                    <div>
                        <textarea type = 'text' placeHolder = 'your message...' name = 'message'
                        className = 'form-control' value = {props.contact.message}
                        onChange = { props.change } required
                        />
                    </div>
                    <input type = 'submit' className = 'btn btn-block btn-primary mt-3' 
                    placeHolder = 'send' onClick = {props.submit}
                    />
                </form>
            </div>
        </div>
    )
}

export default Contact; 