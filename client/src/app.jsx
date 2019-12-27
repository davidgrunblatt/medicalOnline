import React from 'react';
import './index.css'; 
import './styles/app/app.css'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import axios from 'axios'; 
// COMPONENTS
import Jumbotron from './components/Jumbotron'; 
import Navbar from './components/Navbar'; 
import Dashboard from './components/Dashboard'; 


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            page: 'dashboard',
            username: '',
            password: '',
            logged: false,
            userData: {
                username: '',
                fullname: '',
                email: '',
                phone: ''
            }
        }
    }

    // FADE IN BODY, CALLED FROM COMPONENT DID MOUNT 
    body_fade_in = () => {
        const root = document.querySelector('#parent_container');
        setTimeout(() => {
            root.classList.add('fade_in'); 
        }, 2000);
    }

    // ON CHANGE LOGIN FORM HANDLER 
    login_change = (e) => {
        this.setState({ [e.target.name]: e.target.value }); 
    }

    // LOGIN SUBMIT METHOD
    login_submit = async (e) => {
        e.preventDefault();
        await axios.get('/api/login_patient', {
            params: {
                username: this.state.username,
                password: this.state.password
            }
        })
        .then( user => {
            // POPULATING GLOBAL STATE WITH API PAYLOAD
            this.setState({
                userData: {
                    username: user.data.username,
                    fullname: user.data.fullname,
                    email: user.data.email,
                    phone: user.data.phone
                }          
            }, () => console.log('updpated global state: ', this.state)); 

            // SAVING JWT IN LOCAL APPLICATION STORAGE 
            const token = user.headers['x-auth-token'];
            localStorage.setItem('token', token); 
        } )
        .catch( ex => console.log('Unable to retrieve data: ', ex) ); 
    }

    // COMPONENTDIDMOUNT TRIGGERS FADE IN ON LOAD 
    componentDidMount(){
        this.body_fade_in();
    }


    render() { 
        return ( 
            <div id = 'parent_container' className = 'fade_transition'>
                <header className = 'header'>
                    <img src = {require('./images/logo.png')} alt = 'brand logo' />
                    <Navbar /> 
                </header>
                <main>
                    { this.state.page === 'landing' ? <Jumbotron /> : <Dashboard  change = {this.login_change} 
                    submit = {this.login_submit} username = {this.state.username} password = {this.state.password}
                    /> }
                </main>
            </div>
         );
    }
}
 
export default App;