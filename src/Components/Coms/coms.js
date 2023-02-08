import React, { Component } from 'react';
import './coms.css'
import Firstcom from './firstcom/firstcom';
import Second from './second/second';

class Coms extends Component {

    state = {
        acom:0,
        bcom:0,
        ccom:0,
        dcom:0,
    }

    Allpluse = ()=>{
        let {acom,bcom,ccom,dcom} = this.state
        acom++
        bcom++
        ccom++
        dcom++

        this.setState({
            acom,bcom,ccom,dcom
        })
    }
    Allminuse = ()=>{
        let {acom,bcom,ccom,dcom} = this.state
        acom--
        bcom--
        ccom--
        dcom--

        this.setState({
            acom,bcom,ccom,dcom
        })
    }

    aPluse=()=>{
        let {acom}=this.state
        acom++

        this.setState({
            acom
        })
    }
    aMinuse=()=>{
        let {acom}=this.state
        acom--

        this.setState({
            acom
        })
    }
    bPluse=()=>{
        let {bcom}=this.state
        bcom++

        this.setState({
            bcom
        })
    }
    bMinuse=()=>{
        let {bcom}=this.state
        bcom--

        this.setState({
            bcom
        })
    }
    cPluse=()=>{
        let {ccom}=this.state
        ccom++

        this.setState({
            ccom
        })
    }
    cMinuse=()=>{
        let {ccom}=this.state
        ccom--

        this.setState({
            ccom
        })
    }
    dPluse=()=>{
        let {dcom}=this.state
        dcom++

        this.setState({
            dcom
        })
    }
    dMinuse=()=>{
        let {dcom}=this.state
        dcom--

        this.setState({
            dcom
        })
    }

    render() {
        let {acom,bcom,ccom,dcom} = this.state
        return (
            <div className='Container'>
                <div className='Btn'>  
                <button onClick={this.Allpluse}>+</button>
                <button onClick={this.Allminuse}>-</button>
                </div>
              
                <div className='com'>

                    <Firstcom acom={acom} bcom={bcom} aPluse={this.aPluse} aMinuse={this.aMinuse} bPluse={this.bPluse} bMinuse={this.bMinuse}/>

                    <Second ccom={ccom} dcom={dcom} cPluse={this.cPluse} cMinuse={this.cMinuse}  dPluse={this.dPluse} dMinuse={this.dMinuse} />

                    </div>
            </div>
        );
    }
}

export default Coms;



