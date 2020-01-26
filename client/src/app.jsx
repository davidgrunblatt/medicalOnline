import React from 'react';
import './index.css'; 
import './styles/app/app.css'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import axios from 'axios'; 
import jwtDecode from 'jwt-decode'; 
import Joi from 'joi-browser'; 

// COMPONENTS
import Carousel from './components/Carousel'; 
import Jumbotron from './components/Jumbotron'; 
import Navbar from './components/sidebar'; 
import Login from './components/Login'; 
import Dashboard from './components/Dashboard'; 
import Chat from './components/Chat'; 
import Contact from './components/Contact'; 
import About from './components/About'; 
import Footer from './components/Footer'; 
import Appointments from './components/Appointments'; 


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            page: 'home',
            username: '',
            email: '',
            password: '',
            error: '',
            logged: false,
            changes_saved: false,
            file_name: '', 
            file_saved: false,
            userData: {
                username: '',
                fullname: '',
                email: '',
                phone: '',
                chatKey: ''
            },
            file: '',
            onSetSidebarOpen: true,
            sidebarOpen: false
        }
    }

    // SIDE BAR HANDLER 
    onSetSidebarOpen = (open) => {
        this.setState({ sidebarOpen: open });
    }

    // PAGE CHANGER 
    page_handler = (e) => {
        if(e.target.id === 'home'){
            this.setState({ page: 'home' });
        } else if (e.target.id === 'login'){
            this.setState({ page: 'dashboard' })
        } else if (e.target.id === 'consultation'){
            this.setState({ page: 'consultation' }); 
        } else if (e.target.id === 'logout'){
            this.setState({ page: 'home' }); 
        } 
        
        
        setTimeout(() => {
            this.setState({ sidebarOpen: false }); 
        }, 500);
    }

    
    jwt = () => {
        const token = localStorage.getItem('furelosToken');
        return token; 
    }

    // RETRIEVE && DECODE - JWT 
    jwt_decode = () => {
        const token = localStorage.getItem('furelosToken');
        const decoded = jwtDecode(token);
        return decoded; 
    }

    // FADE IN BODY, CALLED FROM COMPONENT DID MOUNT 
    body_fade_in = () => {
        const root = document.querySelector('#parent_container');
        setTimeout(() => {
            root.classList.add('fade_in'); 
        }, 2000);
    }

    // FILE UPLOAD  // FILE UPLOAD  // FILE UPLOAD // FILE UPLOAD  // FILE UPLOAD  // FILE UPLOAD
    file_change = (e) => {
        if (e.target.type === 'file') {
            this.setState({ file: e.target.files[0] }, () => console.log('file state', this.state.file)); 
            console.log(e.target.value);
        }
    }

    file_submit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('file', this.state.file);
        this.setState({ file_saved: true });

        await axios.post('/api/file_upload', form, {
            headers: {
                "Content-type": "multipart/form-data",
                "x-auth-token": this.jwt()
            }, 
        })
        .then( data => {
            console.log('file sent', data);
            setTimeout(() => {
                this.setState({ file_saved: false }); 
            }, 1000); 
        } )
        .catch( ex => {
            console.log('unable to send file', ex);
            const error = 'unable to send file. try again shortly.';
            this.setState({ error }); 
            alert(this.state.error); 
        } ); 
    }

    // EDIT FORM - HANDLER      EDIT FORM       EDIT FORM       EDIT FORM       EDIT FORM       EDIT FORM
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

    // EDIT ACCOUNT FILE SUBMIT 
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
                'x-auth-token': this.jwt()
            }
        })
        .then( data => {
            console.log('Updated data sent!', data);
            this.setState({ changes_saved: true }); 
            setTimeout(() => {
                this.setState({ changes_saved: false }); 
            }, 3000);
        } )
        .catch( ex => console.log('Updated failed...', ex) ); 
    }



    // LOGIN - FORM HANDLER     LOGIN   LOGIN   LOGIN   LOGIN   LOGIN   LOGIN   LOGIN   LOGIN 
    login_change = (e) => {
        this.setState({ [e.target.name]: e.target.value.toLowerCase() }); 
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
            localStorage.setItem('furelosToken', token); 
        } )
        .catch( ex => {
            console.log('username or password is incorrect: ', ex);
            this.setState({ error: 'username or password is incorrect' });
            alert(this.state.error); 
        } ); 
    }

    // REGISTER SUBMIT   REGISTER SUBMIT     REGISTER SUBMIT     REGISTER SUBMIT    REGISTER SUBMIT 
    register_submit = async (e) => {
        e.preventDefault();

        // JOI SCHEMA
        const schema = {
            username: Joi.string().min(4).max(15).required(),
            password: Joi.string().min(4).max(128).required(),
            email: Joi.string().email({ minDomainAtoms: 2 }).required()
        }

        // JOI VALIDATION 
        const validate = Joi.validate({
            username: this.state.username,
            email: this.state.email, 
            password: this.state.password
        }, schema)
        .then(async () => {
            await axios.post('/api/create_patient', {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email
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
            localStorage.setItem('furelosToken', token); 
        } )
        .catch( ex => {
            const error = 'username or email already registered';
            this.setState({ error }); 
            alert(this.state.error);
        } ); 
        })
        .catch(ex => {
            console.log('not working', ex.details[0].message);
            this.setState({ error: ex.details[0].message }); 
            alert(this.state.error); 
        }); 
    }

    // LOGOUT   LOGOUT  LOGOUT  LOGOUT  LOGOUT  LOGOUT  LOGOUT 
    logout_handler = (e) => {
        this.setState({ page: 'home' }); 
        const remove = localStorage.removeItem('furelosToken');
        this.setState({
            logged: false,
            sidebarOpen: false
        }); 
    }

    // COMPONENTDIDMOUNT TRIGGERS FADE IN ON LOAD 
   async componentDidMount(){
        this.body_fade_in();

        // ON MOUNT CHECK IF JWT, TO RENDER PAGE
        const token = localStorage.getItem('furelosToken');
        if(token){
            await axios.get('/api/get_patient', {
                params: {
                    _id: this.jwt_decode(token).user_id
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
         } )
         .catch( ex => console.log('Unable to retrieve data: ', ex) ); 
        }
    }

    render() { 
        // PROPS FOR LOGIN COMPONENT
        const login_props = {
            change: this.login_change,
            submit: this.login_submit,
            username: this.state.username,
            password: this.state.password,
            register: this.register_submit
        }
        // PROPS FOR DASHBOARD, THIS.STATE.USERDATA
        const user_data = this.state.userData; 
        const file = {
            file_change: this.file_change,
            file_submit: this.file_submit,
            changes_saved: this.state.changes_saved,
            file_saved: this.state.file_saved
        }

        if(this.state.page === 'dashboard'){
            return ( 
                <div id = 'parent_container' className = 'fade_transition'>
                    <header className = 'header'>
                        <img src = {require('./images/logo.png')} alt = 'brand logo' />
                        <Navbar page_handler = {this.page_handler} logged = {this.state.logged} logout = {this.logout_handler} 
                                onSetSidebarOpen = {this.onSetSidebarOpen} 
                                sidebarOpen = {this.state.sidebarOpen}
                        /> 
                    </header>
                    <main>
                        { this.state.logged ? <Dashboard data = {user_data} submit = {this.update_submit}
                        change = {this.update_change} file = {file} /> : <Login login = {login_props} /> }
                    </main>
                    <footer>
                       <Contact /> 
                       <Footer /> 
                    </footer>
                </div>
             );
        } else if (this.state.page === 'home'){
            return ( 
                <div id = 'parent_container' className = 'fade_transition'>
                    <header className = 'header'>
                        <img src = {require('./images/logo.png')} alt = 'brand logo' />
                        <Navbar  page_handler = {this.page_handler} logged = {this.state.logged} logout = {this.logout_handler} 
                                onSetSidebarOpen = {this.onSetSidebarOpen} 
                                sidebarOpen = {this.state.sidebarOpen} /> 
                    </header>
                    <main>
                        <Jumbotron /> 
                        {/* <Carousel /> */}
                        <About /> 
                    </main>
                    <footer>
                       <Contact /> 
                       <Footer /> 
                    </footer>
                    {/* <Appointments />  */}
                </div>
            );
        }
        else if (this.state.page === 'consultation'){
            return ( 
                <div id = 'parent_container' className = 'fade_transition'>
                    <header className = 'header'>
                        <img src = {require('./images/logo.png')} alt = 'brand logo' />
                        <Navbar  page_handler = {this.page_handler} logged = {this.state.logged} logout = {this.logout_handler} 
                                onSetSidebarOpen = {this.onSetSidebarOpen}
                                sidebarOpen = {this.state.sidebarOpen} />  
                    </header>
                    <main>
                        {this.state.logged ? <Chat token = {this.jwt_decode()} /> : <Jumbotron /> }
                        { this.state.logged ? <Dashboard data = {user_data} submit = {this.update_submit}
                        change = {this.update_change} file = {file} /> : <Login login = {login_props} /> }
                    </main>
                    <footer>
                       <Contact /> 
                       <Footer /> 
                    </footer>
                </div>
            );
        }
    }
}
 
export default App;