import React, { Component } from 'react'
import player from './imgOanTuTi/playerComputer.png';
import bao from './imgOanTuTi/bao.png';
import {connect} from 'react-redux';

class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0px;}
          }`
        return (
            <div className="player">
                <style>
                    {keyframe}
                </style>
                <div className="playerOption" style={{position:'relative',overflow:'hidden'}}>
                    <img style={{position: 'absolute',animation: `randomItem${Date.now()} 0.3s`,transform: 'scaleX(-1)',left:'22%'}} className="mt-4" src={this.props.computer.hinhAnh} width={75} height={75} alt="bao"></img>
                </div>
                <div className="speech-bubble"></div>
                <img style={{width: '150px',height: '150px'}} src={player} alt="iron-man" />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        computer : state.OanTuTiReducer.computer
    }
}

export default connect (mapStateToProps)(Computer)