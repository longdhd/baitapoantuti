import React, { Component } from 'react'
import './BTOanTuTi.css'
import Computer from './Computer'
import KetQua from './KetQua'
import Player from './Player'
import { connect } from 'react-redux'

class BTOanTuTi extends Component {
    render() {
        

        return (
            <div className="gameOanTuTi">
                <div className="row text-center mt-3">
                    <div className="col-3">
                        <Player />
                    </div>
                    <div className="col-6">
                        <KetQua />
                        <button onClick={()=>{
                            this.props.playGame()
                        }}className="btn btn-success p-3 display-4 mt-3">Play game</button>
                    </div>
                    <div className="col-3">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        playGame: ()=>{
            let count = 0;
            //Khai bao ham lap di lap lai
            let randomComputer = setInterval(() => {
                dispatch({
                    type: 'RANDOM',
                })
                count ++;
                if(count >=10){
                    //Ham set interval lai
                    clearInterval(randomComputer)

                    dispatch({
                        type: 'END_GAME',
                    })
                }
            }, 100);
        }
    }
}

export default connect(null,mapDispatchToProps)(BTOanTuTi)
