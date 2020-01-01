import React from 'react';
import './index.css'; 
import './styles/app/app.css'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import axios from 'axios'; 
import jwtDecode from 'jwt-decode'; 
// COMPONENTS
import Jumbotron from './components/Jumbotron'; 
import Navbar from './components/sidebar'; 
import Login from './components/Login'; 
import Dashboard from './components/Dashboard'; 
import Chat from './components/Chat'; 
import Contact from './components/Contact'; 


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            page: 'home',
            username: '',
            password: '',
            logged: false,
            userData: {
                username: '',
                fullname: '',
                email: '',
                phone: '',
                chatKey: ''
            },
            file: ''
        }
    }

    page_handler = (e) => {
        if(e.target.id === 'home'){
            this.setState({ page: 'home' });
            console.log(e.target.id); 
        } else if (e.target.id === 'login'){
            console.log(e.target.id); 
            this.setState({ page: 'dashboard' })
        } else if (e.target.id === 'consultation'){
            console.log(e.target.id); 
            this.setState({ page: 'consultation' }); 
        }
    }

    // RETRIEVE && DECODE - JWT 
    jwt = () => {
        const token = localStorage.getItem('token');
        return token; 
    }
    jwt_decode = () => {
        const decoded = jwtDecode(this.jwt());
        return decoded; 
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
    // ON CHANGE FOR EDIT FORM 
    update_change = (e) => {
        // create a dummy object to update properties then this.setState replacing old userData object with dummy. 
        const dummy = this.state.userData; 

        if(e.target.name === 'fullname'){
            dummy.fullname = e.target.value;
        } 
        if(e.target.name === 'email'){
            dummy.email = e.target.value;
        }
        if(e.target.name === 'phone'){
            dummy.phone = e.target.value;
        }

        this.setState({ dummy }); 
    }

    // FILE UPLOAD  // FILE UPLOAD  // FILE UPLOAD
    file_change = (e) => {
        this.setState({ file: e.target.files[0] }, () => console.log('file state', this.state.file)); 
    }

    file_submit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('file', this.state.file); 

        await axios.post('/api/file_upload', form, {
            headers: {
                "Content-type": "multipart/form-data",
                "x-auth-token": this.jwt()
            }
        })
        .then( data => console.log('file sent', data) )
        .catch( ex => console.log('unable to send file', ex) ); 
    }

    // UPDATE ACCOUNT METHOD
    update_submit = async (e) => {
        e.preventDefault();
        // JWT DECODED TO RETRIEVE USER_ID FROM JWT PAYLOAD AND USE ID TO MAKE MONGO UPDATE 
        let dummy = this.jwt_decode();

        // AXIOS POST REQ TO UPDATE USER INFO
        await axios.post('/api/update_patient', {
            _id: dummy.user_id, // ID FROM JWT PAYLOAD
            fullname: this.state.userData.fullname,
            email: this.state.userData.email,
            phone: this.state.userData.phone
        }, {
            headers: {
                'x-auth-token':this.jwt()
            }
        })
        .then( data => console.log('Updated data sent!', data) )
        .catch( ex => console.log('Updated failed...', ex) ); 
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
                    phone: user.data.phone,
                    chatKey: user.data.chatKey
                }          
            }, () => console.log('updpated global state: ', this.state)); 

            // UPDATE STATE LOGGED: TRUE
            this.setState({ logged: true }); 
            
            // SAVING JWT IN LOCAL APPLICATION STORAGE 
            const token = user.headers['x-auth-token'];
            localStorage.setItem('token', token); 
        } )
        .catch( ex => console.log('Unable to retrieve data: ', ex) ); 
    }

    // COMPONENTDIDMOUNT TRIGGERS FADE IN ON LOAD 
    componentDidMount(){
        this.body_fade_in();

        // ON MOUNT CHECK IF JWT, TO RENDER PAGE
        const token = localStorage.getItem('token');
        // if(token) { this.setState({ logged: true }) }
    }


    render() { 
        // PROPS FOR LOGIN COMPONENT
        const login_props = {
            change: this.login_change,
            submit: this.login_submit,
            username: this.state.username,
            password: this.state.password,
        }
        // PROPS FOR DASHBOARD, THIS.STATE.USERDATA
        const user_data = this.state.userData; 
        const file = {
            file_change: this.file_change,
            file_submit: this.file_submit
        }

        if(this.state.page === 'dashboard'){
            return ( 
                <div id = 'parent_container' className = 'fade_transition'>
                    <header className = 'header'>
                        <img src = {require('./images/logo.png')} alt = 'brand logo' />
                        <Navbar page_handler = {this.page_handler} logged = {this.state.logged} /> 
                    </header>
                    <main>
                        { this.state.logged ? <Dashboard data = {user_data} submit = {this.update_submit}
                        change = {this.update_change} file = {file} /> : <Login login = {login_props} /> }
                    </main>
                    <footer>
                       <Contact /> 
                    </footer>
                </div>
             );
        } else if (this.state.page === 'home'){
            return ( 
                <div id = 'parent_container' className = 'fade_transition'>
                    <header className = 'header'>
                        <img src = {require('./images/logo.png')} alt = 'brand logo' />
                        <Navbar  page_handler = {this.page_handler} logged = {this.state.logged} /> 
                    </header>
                    <main>
                        <Jumbotron /> 
                    </main>
                    <footer>
                       <Contact /> 
                    </footer>
                </div>
            );
        }
        else if (this.state.page === 'consultation'){
            return ( 
                <div id = 'parent_container' className = 'fade_transition'>
                    <header className = 'header'>
                        <img src = {require('./images/logo.png')} alt = 'brand logo' />
                        <Navbar  page_handler = {this.page_handler} logged = {this.state.logged} /> 
                    </header>
                    <main>
                        <Chat />
                        { this.state.logged ? <Dashboard data = {user_data} submit = {this.update_submit}
                        change = {this.update_change} file = {file} /> : <Login login = {login_props} /> }
                    </main>
                    <footer>
                       <Contact /> 
                    </footer>
                </div>
            );
        }
    }
}
 
export default App;