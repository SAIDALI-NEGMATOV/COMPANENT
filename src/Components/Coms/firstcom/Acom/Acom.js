import React, { Component } from 'react';
import './Acom.css'

class Acom extends Component {
    render() {
        return (
            <div className='Acom'>
                <div className="Com_a">
                    <h2>A com</h2>
                    <button onClick={this.props.aPluse}>+</button>
                    <button onClick={this.props.aMinuse}>-</button>
                </div>
                <h2>{this.props.acom}</h2>
            </div>
        );
    }
}

export default Acom;
