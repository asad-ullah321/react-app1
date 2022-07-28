import { combineReducers } from "redux";
import areaBox from "./areaBox";
import emailBox from "./emailBox";
import newUser from "./newUser";


import reducer from "./ratingReducer";
const reducers = combineReducers({
    rating: reducer,
    boxEmail: emailBox,
    areabox: areaBox,
    newuser: newUser
})
export default reducers;