import React, { Component } from 'react'
import phoneData from './../../Data/dataPhone.json'
import SanPham from './SanPham'

export default class DanhSachSanPham extends Component {

    renderSanPham = () => {
        return phoneData.map((sanPham,index) => {
            return <div className="col-4" key={index}>
                <SanPham sanPham={sanPham}/>
            </div>
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-danger text-center">Danh sach san pham</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
