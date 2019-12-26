import React from 'react';
import '../styles/about/about.css'; 
import logo from '../images/logo.png'; 
import slogan from '../images/slogan.png'; 
import logo_full from '../images/logo_full.png'; 
import castillo from '../images/castillo.jpg'; 

const About = (props) => {
    return(
        <div>
            <div className = 'about_parent_container'>
                <div>
                    <h1>About the Clinic</h1>
                    <p>
                        We are a clinic specialized in Maxillofacial Surgery, 
                        which includes medical and surgical treatment for pathologies affecting the face, 
                        neck and mouth; working closely to other medical and dentistry specialties. 
                        <br />
                        <br />
                        Our administrator Md. Pablo Furelos executes and supervises every surgery done in our clinic.
                        <br />
                        <br />
                        Estamos habituados al uso de las técnicas quirúrgicas más complejas, incluida la cirugía craneofacial. 
                        Pero estos recursos quirúrgicos solo son necesarios en situaciones muy especiales. Conscientes de que 
                        podían ser empleados otros medios, hemos investigado durante años buscando soluciones quirúrgicas cada 
                        vez más sencillas y menos agresivas, para resolver estas situaciones difíciles.
                    </p>
                </div>
                <div>
                    {/* <h2>Multimedia</h2> */}
                    <span>
                        <iframe height="315" 
                        src="https://www.youtube.com/embed/videoseries?list=PLujGrc9z2euXAZdXAlcrbuHCDJGCVTgU7" 
                        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen></iframe>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About; 

            

