import { combineReducers } from "redux";
import DatVeReducer from "./DatVeReducer";
import GioHangReducer from "./GioHangReducer";
import OanTuTiReducer from './OanTuTiReducer';
import './DatVeReducer.js'
//Store tổng ứng dụng
export const rootReducer = combineReducers ({
    //Nơi sẽ chứa các reducer cho nghiệp vụ (store con)
    GioHangReducer : GioHangReducer,
    OanTuTiReducer : OanTuTiReducer,
    DatVeReducer : DatVeReducer
})