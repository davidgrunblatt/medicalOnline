import React from 'react';
import one from '../images/one.jpg';
import two from '../images/two.jpg';
import three from '../images/three.jpg';
import four from '../images/four.jpg';

class Jumbotron extends React.Component{
    state = {
        image1: one,
        image2: two,
        count: 0
    }
    componentDidMount(){
        this.timeOut = setTimeout(() => {
            const jumbotron = document.querySelector('.jumbotron_parent');
            jumbotron.classList.remove('slide_out'); 
            jumbotron.classList.add('slide_in');
        }, 2000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeOut); 
    }
    render(){
        return(
            <div className = 'page_transition global_size'>
                <main className = 'jumbotron_parent slide_transition slide_out'></main>
            </div>
        )
    }
}

export default Jumbotron; 