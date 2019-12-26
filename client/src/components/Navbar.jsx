import React, {Component} from 'react';
import '../styles/hamburger/hamburgers.css'; 
import Sidebar from 'react-sidebar';

class Navbar extends Component {
    state = { 
        onSetSidebarOpen: true
     }

    onSetSidebarOpen = (open) => {
        this.setState({ sidebarOpen: open });
    }

    render() { 
        // WRITE NAVBAR CONTENT IN content, THEN INJECT IT INTO SIDEBAR 
        const content = 
        <div>
            <h1>Hello world</h1>
            <p>How art thou Romeo?</p>
        </div>; 

        return ( 
            <div>
                <Sidebar 
                    pullRight // floats the sidebar to the right 
                    sidebar={<b>{ content }</b>} // SIDEBAR CONTENT GOES HERE 
                    open={this.state.sidebarOpen} // opens value is this.state.onSetSidebarOpen which is passed to the function
                    onSetOpen={this.onSetSidebarOpen} // triggers open and close of sidebar 
                    styles={{ sidebar: { background: "white", position: "absolute", zIndex: 2, width: 260, marginTop: 90 } }} // styling 
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