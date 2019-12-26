import React from 'react';
import './index.css'; 
import './styles/app/app.css'; 
import 'bootstrap/dist/css/bootstrap.css'; 
// COMPONENTS
import Jumbotron from './components/Jumbotron'; 
import Navbar from './components/Navbar'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import Map from './components/Map'; 

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            test: "Clinica Furelos esta online...",
            name: '',
            email: '',
            subject: '',
            message: '',
            city: ''
         }
    }

    // CONTACT FORM HANDLERS 
    contact_onChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value 
         }); 
    }

    contact_submit = (e) => {
        e.preventDefault();
        console.log("sent data", this.state); 
    }

    // COMPONENTDIDMOUNT TRIGGERS FADE IN ON LOAD 
    componentDidMount(){
        const root = document.querySelector('#parent_container');
        setTimeout(() => {
            root.classList.add('fade_in'); 
        }, 2000);

        setTimeout(() => {
            this.onload_images(); 
        }, 3000);
    }

    // CHANGES CONTACT SECTION BACKGROUND IMAGE 
    onload_images = () => {
        let count = 0;
        setInterval( () => {
            count++;
            if(count >= 3) { count = 0; }
            if(count === 0){
                this.setState({ city: "shanghai" })
            }
            else if(count === 1){
                this.setState({ city: "madrid" })
            }
            else if(count === 2){
                this.setState({ city: "paris" })
            }
        }, 7000 );
    }

    render() { 
        return ( 
            <div id = 'parent_container' className = 'fade_transition'>
                <header className = 'header'>
                    <img src = {require('./images/logo.png')} alt = 'brand logo' />
                    <Navbar /> 
                </header>
                <main>
                    <Jumbotron banner = { this.state.test } /> 
                    <About /> 
                    <Map /> 
                    <Contact change = {this.contact_onChange} submit = {this.contact_submit} 
                    style = {this.state.city} contact = {this.state} /> 
                </main>
                <footer>
                    <h1>Contact section</h1>
                </footer>
            </div>
         );
    }
}
 
export default App;