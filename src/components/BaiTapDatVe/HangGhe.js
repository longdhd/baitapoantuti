import React, { Component } from 'react';
import {connect} from 'react-redux';
import { datGheAction } from '../../redux/actions/DatVeAction';

class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe,index) =>{
            let cssGheDaDat = '';
            //Trang thai ghe da bi nguoi khac dat roi
            if(ghe.gia == 0){
                return <span className="rowNumber ml-5 mr-1">{ghe.soGhe}</span>
            }else{
                if(ghe.daDat){
                    cssGheDaDat = 'gheDuocChon';
                }
                //Xet trang thai ghe dang dat
                let cssGheDangDat = '';
                let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
                if(indexGheDangDat !==-1){
                    cssGheDangDat = 'gheDangChon'
                }
                return <button onClick={() => {
                    this.props.datGhe(ghe)
                }} disabled={ghe.daDat} className={`ghe ${cssGheDaDat}`} key={index} style={{fontSize: '20px'}}>
                    {ghe.soGhe}
                </button>
            }
        })
    }

    render() {
        return (
            <div className="text-light text-left ml-5 mt-3" style={{fontSize:'30px'}}>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        danhSachGheDangDat : state.DatVeReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        datGhe: (ghe) =>{
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HangGhe)