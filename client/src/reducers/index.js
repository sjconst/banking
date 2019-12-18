import loggedReducer from "./login";
import showReducer from "./show";
import changeReducer from "./change";
import userReducer from "./user";
import userDataReducer from "./userdata";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    login: loggedReducer,
    show: showReducer,
    change: changeReducer,
    user: userReducer,
    userData: userDataReducer
});

export default allReducers;