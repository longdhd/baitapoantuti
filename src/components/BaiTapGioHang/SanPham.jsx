import React, { Component } from 'react'
import {connect} from 'react-redux';

class SanPham extends Component {
    render() {

        const {sanPham} = this.props;

        return (
          <div className="card text-dark bg-light">
            <img className="card-img-top" src={sanPham.hinhAnh} width={150} height={250} alt="..." />
            <div className="card-body">
              <h4 className="card-title">{sanPham.tenSP}</h4>
              <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
              <button className="btn btn-success" onClick={() => {
                  this.props.themGioHang(sanPham)
              }}>Them gio hang</button>
            </div>
          </div>
        );
    }
}

//Xay dung ham tao props la ham xu ly su kien => dua du lieu len store
const mapDispatchToProps = (dispatch) => {
    return{
        //Tao ra props component (la function => dua du lieu len store)
        themGioHang: (sanPham)=>{
            const spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                giaBan: sanPham.giaBan,
                soLuong: 1,
                hinhAnh: sanPham.hinhAnh
            }
            //Tao action dua du lieu len reducer
            const action ={
                type: 'THEM_GIO_HANG',
                spGioHang:spGioHang //Noi dung gui len reducer
            }
            //Dung ham dispatch dua du lieu len reducer
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(SanPham)
