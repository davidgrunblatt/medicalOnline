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
        const jumbotron_1 = document.querySelector('.jumbotron_parent div:nth-child(1)');
        const jumbotron_2 = document.querySelector('.jumbotron_parent div:nth-child(2)');
        const jumbo_divs = document.querySelectorAll('.jumbo_div');
        let count = 0; 

        this.timeout = setTimeout(() => {
        //    jumbo_divs.forEach( div => div.classList.add('fade_in') ); 
        jumbotron_1.classList.add('fade_in'); 

           this.interval = setInterval(() => {
            jumbotron_1.classList.toggle('toggle_opacity'); // DIV 1 - FADE OUT
            jumbotron_2.classList.add('fade_in'); // DIV 2 - FADE IN 
            count++;
            
            if(count > 3) { count = 0; }

            if(count == 0){
                this.setState({ image1: one }); 
            }
            else if(count == 1){
                this.setState({ image2: two }); 
            }
            else if(count == 2){
                this.setState({ image1: three }); 
            } 
            else if (count == 3){
                this.setState({ image2: four }); 
            }
        }, 5000); 

        }, 6000); 


        this.timeOut = setTimeout(() => {
            const jumbotron = document.querySelector('.jumbotron_parent');
            jumbotron.classList.remove('slide_out'); 
            jumbotron.classList.add('slide_in');
        }, 2000);
    }

    componentWillUnmount(){
        console.log(`unmounting jumbotron and clearing ${this.interval}`); 
        clearInterval(this.interval);
        clearTimeout(this.timeOut); 
    }
    render(){
        return(
            <div>
                <main className = 'jumbotron_parent slide_transition slide_out'>
                    <div className = 'jumbo_div fade_transition'>
                        <img src = {this.state.image1} alt = '' />
                    </div>
                    <div className = 'jumbo_div fade_transition'>
                        <img src = {this.state.image2} alt = '' />
                    </div>
                </main>
            </div>
        )
    }
}

export default Jumbotron; 