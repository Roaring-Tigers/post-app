import { POSTS_REQUEST_STARTED,POSTS_REQUEST_SUCCESS,POSTS_REQUEST_FAILURE } from "../actions/actionTypes";


const initialState = {
    loading: false,
    data: [],
    error: ''
}

const postReducer = (state = initialState, action) => {
    switch(action.type) {
         case POSTS_REQUEST_STARTED: return {...state, loading: true};

         case POSTS_REQUEST_SUCCESS: return {...state, loading: false, data: action.payload, error: ''};

        case POSTS_REQUEST_FAILURE: return {...state, loading: false, data: [], error: action.payload};

        default: return state;

    }
}

export default postReducer;
