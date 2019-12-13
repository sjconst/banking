import loggedReducer from "./login";
import showReducer from "./show";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    login: loggedReducer,
    show: showReducer
});

export default allReducers;