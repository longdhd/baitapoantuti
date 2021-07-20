import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../../redux/actions/DatVeAction";

class InfoVe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button
            className="gheDuocChon"
            style={{ marginRight: "15px" }}
          ></button>
          <span style={{ fontSize: "20px" }} className="text-light">
            Ghe da dat
          </span>
          <br></br>
          <button
            className="gheDangChon"
            style={{ marginLeft: "15px" }}
          ></button>
          <span style={{ fontSize: "20px" }} className="text-light ml-2">
            Ghe dang chon
          </span>
          <br></br>
          <button className="ghe"></button>
          <span style={{ fontSize: "20px" }} className="text-light ml-2">
            Ghe chua dat
          </span>
        </div>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "30px" }}>
                <th>So ghe</th>
                <th>Gia</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning" style={{ fontSize: "25px" }}>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        Huy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-success" style={{ fontSize: "25px" }}>
                <td></td>
                <td>Tong tien</td>
                <td>
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.DatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(InfoVe);
