import React, { Component } from 'react';
import './Dcom.css'

class Dcom extends Component {
    render() {
        return (
            <div>
            <div className="Dcom">
              <div className="Com_d">
                <h2>D com</h2>
                <button onClick={this.props.dPluse}>+</button>
                <button onClick={this.props.dMinuse}>-</button>
              </div>
              <h2>{this.props.dcom}</h2>
            </div>
          </div>
        );
    }
}

export default Dcom;
