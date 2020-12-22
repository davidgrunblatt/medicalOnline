
import React, { Component } from 'react';
import '../styles/about.css'; 
import five from '../images/five.jpg';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div id = 'about_background' className = 'global_size'>
                <div id = 'about_container'>
                    <iframe src="https://www.youtube.com/embed/videoseries?list=PLujGrc9z2euXAZdXAlcrbuHCDJGCVTgU7" 
                    frameBorder="0" poster={five} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
         );
    }
}
 
export default About;