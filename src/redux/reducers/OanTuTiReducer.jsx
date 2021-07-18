const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./imgOanTuTi/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./imgOanTuTi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./imgOanTuTi/bao.png", datCuoc: false },
  ],
  ketQua: "Sáng sớm má cho 5000, 2000 mua kẹo 3000 yêu em",
  playerWin: 0,
  computerWin: 0,
  computer: { ma: "keo", hinhAnh: "./imgOanTuTi/keo.png" },
};

const OanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      let mangCuocCapNhat = [...state.mangDatCuoc];
      //Set tat ca datCuoc = false
      mangCuocCapNhat = mangCuocCapNhat.map((item, index) => {
        //Tim ra maCuoc de set trang thai datCuoc cua item duoc chon = true
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangDatCuoc = mangCuocCapNhat;
      return { ...state };
    }

    case "RANDOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let cuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = cuocNgauNhien;

      return { ...state };
    }

    case "END_GAME": {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;

      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hòa minzy";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua dòi!";
            state.computerWin++;
          } else {
            state.ketQua = "Sáng sớm má cho 5000, 2000 mua kẹo 3000 yêu em!";
            state.playerWin++;
          }
          break;

        case "bua":
          if (computer.ma === "bua") {
            state.ketQua = "Hòa minzy";
          } else if (computer.ma === "bao") {
            state.ketQua = "Thua dòi!";
            state.computerWin++;
          } else {
            state.ketQua = "Sáng sớm má cho 5000, 2000 mua kẹo 3000 yêu em!";
            state.playerWin++;
          }
          break;

        case "bao":
          if (computer.ma === "bao") {
            state.ketQua = "Hòa minzy";
          } else if (computer.ma === "keo") {
            state.ketQua = "Thua dòi!";
            state.computerWin++;
          } else {
            state.ketQua = "Sáng sớm má cho 5000, 2000 mua kẹo 3000 yêu em!";
            state.playerWin++;
          }
          break;

        default: state.ketQua = "Sáng sớm má cho 5000, 2000 mua kẹo 3000 yêu em!";
          break;
      }

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default OanTuTiReducer;
