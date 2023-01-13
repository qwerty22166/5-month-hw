import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts, infoPost} from "../../store/postsSlice";
import Post from "../../components/post/Post";

function PostsPage(props) {
    const dispatch = useDispatch()
    const {posts, preloader, error, post} = useSelector(state => state.postsReducer)

    const getPostsUi = () => {
        dispatch(getPosts())
    }

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <>
            <button onClick={getPostsUi}>get posts</button>
            <button>delete all</button>
            {
                preloader
                    ?
                    <h4>loading...</h4>
                    :
                    error
                        ?
                        <h4>{error}</h4>
                        :
                        posts.map(post => <Post key={post.id} postInfo={post}/>)
            }
        </>
    );
}

export default PostsPage;