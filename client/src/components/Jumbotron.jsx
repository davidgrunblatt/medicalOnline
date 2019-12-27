import React from 'react';
import one from '../images/one.jpg';
import two from '../images/two.jpg';
import three from '../images/three.jpg';
import four from '../images/four.jpg';

class Jumbotron extends React.Component{
    state = {
        image1: one,
        image2: two
    }
    componentDidMount(){
        const jumbotron_1 = document.querySelector('.jumbotron_parent div:nth-child(1)');
        const jumbotron_2 = document.querySelector('.jumbotron_parent div:nth-child(2)');
        let count = 0; 

        this.interval = setInterval(() => {
            jumbotron_1.classList.toggle('toggle_opacity'); 
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
                    <div>
                        <img src = {this.state.image1} alt = '' />
                    </div>
                    <div>
                        <img src = {this.state.image2} alt = '' />
                    </div>
                </main>
            </div>
        )
    }
}

export default Jumbotron; 