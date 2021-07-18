import { combineReducers } from "redux";
import GioHangReducer from "./GioHangReducer";
import OanTuTiReducer from './OanTuTiReducer'

//Store tổng ứng dụng
export const rootReducer = combineReducers ({
    //Nơi sẽ chứa các reducer cho nghiệp vụ (store con)
    GioHangReducer : GioHangReducer,
    OanTuTiReducer : OanTuTiReducer
})