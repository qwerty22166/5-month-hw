import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {infoPost} from "../../store/postsSlice";

function Post({postInfo}) {
    const dispatch = useDispatch()
    const {post} = useSelector(state => state.postsReducer)

    const getPostUi =() => {
        dispatch(infoPost(postInfo.id))
    }

    return (
        <>
            <ul>
                <li>{post.title}</li>
                <li>{post.body}</li>
            </ul>
            <h4>{postInfo.title}</h4>
            <button value={postInfo.id} onClick={getPostUi}>more info</button>
            <p>-------------------------</p>
        </>

    );
}

export default Post;