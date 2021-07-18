import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import Modal from './Modal'


export default class BaiTapGioHang extends Component {
    render() {
        return (
            <div>
                <h3 className="text-danger text-center">Bài tập giỏ hàng redux</h3>
                <Modal/>
                <DanhSachSanPham/>
            </div>
        )
    }
}
