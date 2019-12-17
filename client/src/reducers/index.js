import loggedReducer from "./login";
import showReducer from "./show";
import changeReducer from "./change";
import userReducer from "./user";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    login: loggedReducer,
    show: showReducer,
    change: changeReducer,
    user: userReducer
});

export default allReducers;