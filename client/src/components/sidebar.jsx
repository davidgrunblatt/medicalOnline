import React, {Component} from 'react';
import '../styles/hamburger/hamburgers.css'; 
import Sidebar from 'react-sidebar';
import Scrollchor from 'react-scrollchor';
import '../styles/navbar.css'; 

class Navbar extends Component {
    render() { 
        // WRITE NAVBAR CONTENT IN content, THEN INJECT IT INTO SIDEBAR 
        const content = 
        <div className = 'navbar_container'>
            <span>
                <img src = {require('../images/logo.png')} alt = 'logo' />
            </span>
            <nav>
                <a className = 'nav_item' onClick = {this.props.page_handler} >
                    <img src = {require('../images/home.png')} alt = ''/>
                    <p id = 'home'>Home</p>
                    <img src = {require('../images/next.png')} alt = ''/>
                </a>
                <a className = 'nav_item' onClick = {this.props.page_handler} >
                    <img src = {require('../images/login.png')} alt = ''/>
                    <p id = 'login'>{this.props.logged ? "Dashboard" : "Login"}</p>
                    <img src = {require('../images/next.png')} alt = ''/>
                </a>
                {this.props.logged && <a className = 'nav_item' onClick = {this.props.page_handler} >
                    <img src = {require('../images/calendar.png')} alt = ''/>
                    <p id = 'appointments'>Appointments</p>
                    <img src = {require('../images/next.png')} alt = ''/>
                </a>}
                {this.props.logged && <a className = 'nav_item' onClick = {this.props.page_handler} >
                    <img src = {require('../images/doctor-icon.png')} alt = ''/>
                    <p id = 'consultation'>Consultation</p>
                    <img src = {require('../images/next.png')} alt = ''/>
                </a>}
                <Scrollchor to="#contact_container"  
                    animate={{offset: 10, duration: 600}} className="nav_item" >
                    <img src = {require('../images/contact.png')} alt = ''/>
                    <p id = 'contact' onClick = {this.props.page_handler}>Contact</p>
                    <img src = {require('../images/next.png')} alt = ''/>
                </Scrollchor>
                {this.props.logged && <a className = 'nav_item' onClick = {this.props.logout} >
                    <img src = {require('../images/logout.png')} alt = ''/>
                    <p id = 'logout'>Logout</p>
                    <img src = {require('../images/next.png')} alt = ''/>
                </a>}
            </nav> 
        </div>; 
        const navbar_styling = { 
            background: "white", 
            width: 300, 
            marginTop: 90, 
            border: 'solid thick rgba(192, 192, 192, 0.589)',
            padding: 10,
            position: 'fixed'
         }
        return ( 
            <div>
                <Sidebar 
                    pullRight // floats the sidebar to the right 
                    sidebar={<b>{ content }</b>} // SIDEBAR CONTENT GOES HERE 
                    open={this.props.sidebarOpen} // opens value is this.state.onSetSidebarOpen which is passed to the function
                    onSetOpen={this.props.onSetSidebarOpen} // triggers open and close of sidebar 
                    styles={{ sidebar: navbar_styling }} // styling 
                >
                {/* HAMBURGER SECTION WITH CSS CLASSES */}
                    <button onClick={ () => this.props.onSetSidebarOpen(true)} 
                    className={ this.props.sidebarOpen ? "hamburger hamburger--elastic is-active" : "hamburger hamburger--elastic" } 
                    type="button" style = {{ float: 'right', marginTop: 10 }} >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                {/* HAMBURGER SECTION WITH CSS CLASSES */}
                    </button>
                </Sidebar>
            </div>
         );
    }
}
 
export default Navbar;