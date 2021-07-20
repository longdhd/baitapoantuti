import React, { Component } from 'react'
import './BaiTapDatVe.css'
import InfoVe from './InfoVe'
import danhSachGhe from '../../Data/danhSachGhe.json'
import HangGhe from './HangGhe'

export default class BaiTapDatVe extends Component {

    renderHangGhe = () => {
        return danhSachGhe.map((hangGhe,index) => {
            return <div key={index}>
                <HangGhe hangGhe = {hangGhe}/>
            </div>
        }) 
    }

    render() {
        return (
            <div className="bookingMovie" style={{position: 'fixed', width:'100%',height:'100%', backgroundImage:"url('./imgDatVe/bgmovie.jpg')",backgroundSize:'100%'}}>
                <div style={{backgroundColor:'rgba(0,0,0,0.7)',position:'fixed',width:'100%',height:'100%'}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8">
                                <div className="text-warning text-center display-4">DAT VE XEM PHIM CYBERSOFT FE66</div>
                                <div className="mr-5" style={{fontSize:'25px',color:'white'}}>MAN HINH</div>
                                <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                                    <div className="screen"></div>
                                </div>
                                {this.renderHangGhe()}
                            </div>
                            <div className="col-4">
                                <div className="text-light display-4">DAT VE</div>
                                <InfoVe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
