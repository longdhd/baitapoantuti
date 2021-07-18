import React, { Component } from 'react'
//Ket noi voi redux
import {connect} from 'react-redux';

class Modal extends Component {

    renderGioHang = () => {
        return this.props.gioHang.map((spGH,index) =>{
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} width={100} height={125}></img></td>
                <td>{spGH.giaBan.toLocaleString()}</td>
                <td><button className="btn btn-primary mr-2" onClick={()=> {
                    this.props.tangGiamSoLuong(spGH.maSP,true)
                }}>+</button>
                    {spGH.soLuong}
                    <button className="btn btn-primary ml-2" onClick={()=> {
                    this.props.tangGiamSoLuong(spGH.maSP,false)
                }}>-</button>
                </td>
                <td>{(spGH.giaBan*spGH.soLuong).toLocaleString()}</td>
                <td><button className="btn btn-danger" onClick={() =>
                    this.props.xoaGioHang(spGH.maSP)
                }>Xoa</button></td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ma SP</th>
                            <th>Ten SP</th>
                            <th>Hinh anh</th>
                            <th>Gia ban</th>
                            <th>So luong</th>
                            <th>Thanh tien</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gioHang: state.GioHangReducer.gioHang //tao ra 1 props cua component Modal
    }
}

const mapDispatchToProps = (dispatch) => {
    // return {
    //     xoaGioHangIndex : (index) => {
    //         const action = {
    //             type: 'XOA_GIO_HANG',
    //             index
    //         }
    //         dispatch(action);
    //     }
    // }
    return {
        xoaGioHang : (maSP) => {
            const action = {
                type: 'XOA_GIO_HANG',
                maSP
            }
            dispatch(action);
        },
        tangGiamSoLuong : (maSP,tangGiam) => {
            const action = {
                type: 'TANG_GIAM_SL',
                maSP,
                tangGiam
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal)