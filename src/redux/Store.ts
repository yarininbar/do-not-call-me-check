
import { combineReducers, createStore } from "redux";
import { credentialsReducer } from "./CredentialsState";


const reducers = combineReducers({ credentialsReducer: credentialsReducer});
const store = createStore(reducers);

export default store;

