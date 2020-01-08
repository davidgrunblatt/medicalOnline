import React, {Component} from 'react';
import '../styles/footer.css'; 

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div id = 'footer_container'>
                <span>
                    <img src = {require('../images/logo.png')} alt = 'logo' /> 
                    {/* <a href="mailto:clinica@furelos.com">clinica@furelos.com</a> */}
                    <a href = 'https://www.linkedin.com/in/pablo-furelos-8583b03b/?ppe=1' target = "_blank" >
                        <img src = {require('../images/linkedin.png')} alt = 'linkedin' /> 
                    </a>
                    <a href = 'https://www.facebook.com/clinicafurelos' target = "_blank" >
                        <img src = {require('../images/facebook.png')} alt = 'facebook' /> 
                    </a>
                </span>
            </div>
         );
    }
}
 
export default Footer;
