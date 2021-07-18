import React, { Component } from "react";
import { connect } from "react-redux";
import player from "./imgOanTuTi/player.png";
import bao from "./imgOanTuTi/bao.png";
import bua from "./imgOanTuTi/bua.png";
import keo from "./imgOanTuTi/keo.png";

class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="playerOption">
          <img
            className="mt-4"
            src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}
            width={75}
            height={75}
            alt="bao"
          ></img>
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: "150px", height: "150px" }}
          src={player}
          alt="iron-man"
        />

        <div className="row">
            {this.props.mangDatCuoc.map((item, index) => {

            let border = {};
            if(item.datCuoc){
                border = {border:'4px solid orange'};
            }

            return <div className="col-4" key={index}>
            <button onClick={() =>{
              this.props.datCuoc(item.ma)
            }} style={border} className="btnOption">
                <img src={item.hinhAnh} width={40} height={40} alt={item.ma}></img>
            </button>
            </div>
            })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: 'DAT_CUOC',
        maCuoc
      })
    }
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.OanTuTiReducer.mangDatCuoc,
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Player);
