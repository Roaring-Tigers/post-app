import { POSTS_REQUEST_STARTED,POSTS_REQUEST_SUCCESS,POSTS_REQUEST_FAILURE } from "./actionTypes";
import axios from 'axios';



export const postsRequestStarted = () => {
    return {
        type: POSTS_REQUEST_STARTED
    }
}

export const postsRequestSuccess = (data) => {
    return {
        type: POSTS_REQUEST_SUCCESS,
        payload: data
    }
}

export const postsRequestFailure = (error) => {
    return {
        type: POSTS_REQUEST_FAILURE,
        payload: error
    }
}


export function fetchPosts(){
    return (dispatch)=>{
        dispatch(postsRequestStarted())
        axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        .then(response => dispatch(postsRequestSuccess(response.data)))
        .catch(error => dispatch(postsRequestFailure(error.message)))
    }
}

// thunk => redux-thunk