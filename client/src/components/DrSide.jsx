
import React from 'react';

export default class DrSide extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            test: 'Hello World'
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.text}</h1>
            </div>
        )
    }
}
