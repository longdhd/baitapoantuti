import React, { Component } from 'react'
import {connect} from 'react-redux';

class KetQua extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">{this.props.ketQua}</div>
                <div className="display-4 text-success">PLAYER<span className="text-warning ml-5">{this.props.playerWin}</span></div>
                <div className="display-4 text-success">COMPUTER<span className="text-warning ml-5">{this.props.computerWin}</span></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ketQua: state.OanTuTiReducer.ketQua,
        playerWin: state.OanTuTiReducer.playerWin,
        computerWin: state.OanTuTiReducer.computerWin,
    }
}

export default connect(mapStateToProps)(KetQua)