import React, { Component } from "react"
import './Ccom.css'

class Ccom extends Component {
  render() {
    return (
      <div>
        <div className="Ccom">
          <div className="Com_c">
            <h2>C com</h2>
            <button onClick={this.props.cPluse}>+</button>
            <button onClick={this.props.cMinuse}>-</button>
          </div>
          <h2>{this.props.ccom}</h2>
        </div>
      </div>
    );
  }
}

export default Ccom;
