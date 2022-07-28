import { combineReducers } from "redux";
import areaBox from "./areaBox";
import emailBox from "./emailBox";

import reducer from "./ratingReducer";
const reducers = combineReducers({
    rating: reducer,
    boxEmail: emailBox,
    areabox: areaBox
})
export default reducers;