import { combineReducers } from "redux";
import admUserReducer from "./admUserReducer";
import productReducer from "./productReducer";
import auth from "./authReducer";

const rootReducer = combineReducers({ admUserReducer, productReducer, auth });
export default rootReducer;
