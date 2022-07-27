import { combineReducers } from "redux";
import reducer from "./ratingReducer";
const reducers = combineReducers({
    rating: reducer
})
export default reducers;