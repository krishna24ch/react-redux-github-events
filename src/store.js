import { createStore, applyMiddleware } from "redux";
import eventsReducer from "./reducers";
import thunk from "redux-thunk";

const store = createStore(eventsReducer, applyMiddleware(thunk));

export default store;