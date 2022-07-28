import { changeNum,multNum,changeColor } from "./reducer";
import {combineReducers} from "redux";
export const rootReducer = combineReducers({
    changeNum,multNum,changeColor
});