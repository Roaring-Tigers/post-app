import { createStore, applyMiddleware } from "redux"; // redux-tookit
import postReducer from "./reducer/postReducer";
import {thunk} from "redux-thunk";

const store = createStore(postReducer, applyMiddleware(thunk));

export default store;


// dispatch(fetchPosts())