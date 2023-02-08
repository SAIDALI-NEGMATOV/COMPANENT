import React, { Component } from 'react';
import './Bcom.css'

class Bcom extends Component {
    render() {
        return (
            <div className='Bcom'>
            <div className="Com_b">
                <h2>B com</h2>
                <button onClick={this.props.bPluse}>+</button>
                <button onClick={this.props.bMinuse}>-</button>
            </div>
            <h2>{this.props.bcom}</h2>
        </div>
        );
    }
}

export default Bcom;
