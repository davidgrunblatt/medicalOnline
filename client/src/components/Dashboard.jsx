
import React from 'react';
import axios from 'axios'; 
import '../styles/dashboard/dashboard.css'; 

class Dashboard extends React.Component {
    state = {
        toggle: 0
    }
    edit_toggle = (e) => {
        if(this.state.toggle === 0){
            this.setState({ toggle: 1 });
        } 
        else  {
            this.setState({ toggle: 0 }); 
        }
    }

    componentDidMount(){
        const dashboard = document.querySelector('#dashboard_parent_container');
        this.slide = setTimeout(() => {
            dashboard.classList.remove('slide_out_left');
            dashboard.classList.add('slide_in_right'); 
        }, 1000);
    }

    componentWillUnmount(){
        clearTimeout(this.slide); 
    }

    render() { 
        return ( 
            <div id = 'dashboard_parent_container' className = 'global_size slide_transition slide_out_left'>
                <div id = 'dashboard_container'>
                    <section>
                        <h1><span>Your Dashboard</span> {this.props.data.username} </h1>
                        <h6>All the information you want to share with your Dr. is here. <br />
                            Feel free to update it at any time below. 
                        </h6>
                        <ul>
                            <li><span>Username:</span> {this.props.data.username}</li>
                            <li><span>Full Name:</span> {this.props.data.fullname}</li>
                            <li><span>Email:</span> {this.props.data.email}</li>
                            <li><span>Phone #:</span> {this.props.data.phone}</li>
                        </ul>
                    </section>
                    {/* EDIT SECTION TO TOGGLE  */}
                    <button className = 'btn btn-sm btn-primary btn-block mb-3' 
                    onClick = {this.edit_toggle}>{this.state.toggle === 0 ? "Edit Info" : "Back"}</button>
                    
                    {/* EDIT FORM */}
                    {this.state.toggle === 1 && <section id = "dashboard_edit" >
                        <form>
                            <div className = 'form-group'>
                                <input type = 'text' name = 'fullname' value = {this.props.data.fullname} 
                                onChange = {this.props.change} className = 'form-control'
                                /> 
                            </div>
                            <div className = 'form-group'>
                                <input type = 'email' name = 'email' value = {this.props.data.email} 
                                onChange = {this.props.change} className = 'form-control'
                                />
                            </div>
                            <div className = 'form-group'>
                                <input type = 'string' name = 'phone' value = {this.props.data.phone} 
                                onChange = {this.props.change} className = 'form-control'
                                />
                            </div>
                            <input type = 'submit' onClick = {this.props.submit} className = 'btn btn-block'
                            value = {!this.props.file.changes_saved ? "Save Changes" : "Saved!"} /> 
                        </form>
                    </section>}

                    {/* FILE UPLOAD FORM */}
                    <section>
                        <h4><span>Send Dr. Furelos a file</span></h4>
                        <h6>If you need to share a file with Dr. Furelos you can do so here. 
                            Click on choose file.
                        </h6>
                        <form>
                            <div className = 'form-group'>
                                <input type = 'file' name = 'file' onChange = {this.props.file.file_change}
                                className = 'btn-primary btn-block'
                                />
                            </div>
                            <input type = 'submit' className = 'btn btn-primary btn-block' onClick = {this.props.file.file_submit}
                            value = {!this.props.file.file_saved ? "Send File" : "Sent!"} /> 
                        </form>
                    </section>

                </div>
            </div>
         );
    }
}
 
export default Dashboard;