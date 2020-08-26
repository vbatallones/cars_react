import React, { Component } from 'react';
import ferrari from './488GTB.jpg';
class Ferrari extends Component {
    render () {
        return (
            <div>
                <h1>Ferrari</h1>
                <img src={ferrari} alt="ferrari"></img>
                <p>2019 Ferrari 488 GTB</p>
            </div>
        )
    }
}

export default Ferrari