import React from 'react';
import './index.css'; 
import './styles/app/app.css'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import axios from 'axios'; 
// COMPONENTS
import Jumbotron from './components/Jumbotron'; 
import Navbar from './components/Navbar'; 


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            page: 'dashboard'
        }
    }

    // FADE IN BODY, CALLED FROM COMPONENT DID MOUNT 
    body_fade_in = () => {
        const root = document.querySelector('#parent_container');
        setTimeout(() => {
            root.classList.add('fade_in'); 
        }, 2000);
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
                    <Jumbotron /> 
                </main>
            </div>
         );
    }
}
 
export default App;