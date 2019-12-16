import loggedReducer from "./login";
import showReducer from "./show";
import changeReducer from "./change";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    login: loggedReducer,
    show: showReducer,
    change: changeReducer,
});

export default allReducers;