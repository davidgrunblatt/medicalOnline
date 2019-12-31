import React, {Component} from 'react';
import '../styles/hamburger/hamburgers.css'; 
import Sidebar from 'react-sidebar';
import Scrollchor from 'react-scrollchor';
import '../styles/navbar.css'; 

class Navbar extends Component {
    state = { 
        onSetSidebarOpen: true,
        sidebarOpen: false
     }

    onSetSidebarOpen = (open) => {
        this.setState({ sidebarOpen: open });
    }

    render() { 
        // WRITE NAVBAR CONTENT IN content, THEN INJECT IT INTO SIDEBAR 
        const content = 
        <div className = 'navbar_container'>
            <span>
                <img src = {require('../images/logo.png')} alt = 'logo' />
            </span>
            <nav>
                <Scrollchor to="#login" animate={{offset: 0, duration: 300}} className="nav-link">
                    <a className = 'nav_item' onClick = {this.props.page_handler} >
                        <img src = {require('../images/home.png')} alt = ''/>
                        <p id = 'home'>Home</p>
                        <img src = {require('../images/next.png')} alt = ''/>
                    </a>
                </Scrollchor>
                <Scrollchor to="#login" animate={{offset: 400, duration: 300}} className="nav-link">
                    <a className = 'nav_item' onClick = {this.props.page_handler} >
                        <img src = {require('../images/login.png')} alt = ''/>
                        <p id = 'login'>Login</p>
                        <img src = {require('../images/next.png')} alt = ''/>
                    </a>
                </Scrollchor>
                <Scrollchor to="#login" animate={{offset: 400, duration: 300}} className="nav-link">
                    <a className = 'nav_item' onClick = {this.props.page_handler} >
                        <img src = {require('../images/doctor-icon.png')} alt = ''/>
                        <p>Consultation</p>
                        <img src = {require('../images/next.png')} alt = ''/>
                    </a>
                </Scrollchor>
                <Scrollchor to="#login" animate={{offset: 1000, duration: 300}} className="nav-link">
                    <a className = 'nav_item' onClick = {this.props.page_handler} >
                        <img src = {require('../images/contact.png')} alt = ''/>
                        <p>Contact</p>
                        <img src = {require('../images/next.png')} alt = ''/>
                    </a>
                </Scrollchor>
            </nav> 
        </div>; 

        const navbar_styling = { 
            background: "white", 
            width: 300, 
            marginTop: 90, 
            border: 'solid thick rgba(192, 192, 192, 0.589)',
            padding: 10
    }

        return ( 
            <div>
                <Sidebar 
                    pullRight // floats the sidebar to the right 
                    sidebar={<b>{ content }</b>} // SIDEBAR CONTENT GOES HERE 
                    open={this.state.sidebarOpen} // opens value is this.state.onSetSidebarOpen which is passed to the function
                    onSetOpen={this.onSetSidebarOpen} // triggers open and close of sidebar 
                    styles={{ sidebar: navbar_styling }} // styling 
                >
                {/* HAMBURGER SECTION WITH CSS CLASSES */}
                    <button onClick={() => this.onSetSidebarOpen(true)} 
                    className={ this.state.sidebarOpen ? "hamburger hamburger--elastic is-active" : "hamburger hamburger--elastic" } 
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