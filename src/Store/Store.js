import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import ProfileReducer from "./Reducers/ProfileReducer/ProfileReducer";

const reducers = combineReducers({
    profileStore: ProfileReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;