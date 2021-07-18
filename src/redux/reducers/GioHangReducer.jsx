const initialState = {
    gioHang:[
        {maSP:1, tenSP: 'VinSmart Live', hinhAnh: "./img/vsphone.jpg", soLuong:1, giaBan: 5700000, thanhTien: 1000}
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {

    case 'THEM_GIO_HANG':
        {//Xu ly logic them gio hang
        let gioHangCapNhat = [...state.gioHang];
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
        if(index !== -1){
            gioHangCapNhat[index].soLuong +=1;
        }else{
            gioHangCapNhat.push(action.spGioHang);
        }
        state.gioHang = gioHangCapNhat;
        return { ...state}}
    
    case 'XOA_GIO_HANG':
        {let gioHangCapNhat = [...state.gioHang];
        let sanPhamXoa = gioHangCapNhat.find(sp => sp.maSP === action.maSP);
        gioHangCapNhat.splice(sanPhamXoa,1);
        state.gioHang = gioHangCapNhat;
        return {...state}}
    
    case 'TANG_GIAM_SL':
        {
        let gioHangCapNhat = [...state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === action.maSP);
        if(action.tangGiam){
            gioHangCapNhat[index].soLuong +=1;
        }else{
            if(gioHangCapNhat[index].soLuong > 1){
                gioHangCapNhat[index].soLuong -=1;
            }else{
                alert('So luong toi thieu la 1');
            }
        }
        state.gioHang = gioHangCapNhat;
        return {...state};
        }

    default:
        return {...state}
    }
}
