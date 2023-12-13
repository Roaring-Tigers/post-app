import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { postsRequestStarted,postsRequestSuccess,postsRequestFailure , fetchPosts} from '../redux/actions/postActions';
import axios from 'axios';

const Post = () => {
    const data  = useSelector(state=>state.data) // {loading: false, data: [], error: ''}
    const loading = useSelector(state=>state.loading)
    const error = useSelector(state=>state.error)

    const dispatch = useDispatch();

    useEffect(()=>{
        // dispatch(postsRequestStarted())
        // axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        // .then(response => dispatch(postsRequestSuccess(response.data)))
        // .catch(error => dispatch(postsRequestFailure(error.message)))

        dispatch(fetchPosts())
    },[])


    return(
        <div>
             {
                data.length>0 && data.map(item => 
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                )
             }
        </div>
    )
}

export default Post;