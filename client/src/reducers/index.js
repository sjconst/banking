import loggedReducer from "./login";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    login: loggedReducer
});

export default allReducers;