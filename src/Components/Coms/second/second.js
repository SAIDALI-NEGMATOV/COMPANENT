import React, { Component } from 'react';
import Ccom from './Ccom/Ccom';
import Dcom from './Dcom/Dcom';
import './socond.css'

class Second extends Component {
    render() {
        let {ccom,dcom,cPluse,cMinuse,dPluse,dMinuse} = this.props
        return (
            <div className='C_content'>
                <h3>2-component</h3>
                <div>
                    <Ccom ccom={ccom} cPluse={cPluse} cMinuse={cMinuse}/>
                    <Dcom dcom={dcom} dPluse={dPluse} dMinuse={dMinuse}/>
                </div>
            </div>
        );
    }
}

export default Second;
