import React, { Component } from 'react';
import Acom from './Acom/Acom';
import Bcom from './Bcom/Bcom';
import './first.css'

class Firstcom extends Component {
    render() {
        let {acom,bcom,aPluse,aMinuse,bPluse,bMinuse} = this.props
        return (
            <div className='Content'>
                <h3>1-component</h3>
                <div>
                    <Acom acom={acom} aPluse={aPluse} aMinuse={aMinuse}/>
                    <Bcom bcom={bcom} bPluse={bPluse} bMinuse={bMinuse}/>
                </div>
            </div>
        );
    }
}

export default Firstcom;
