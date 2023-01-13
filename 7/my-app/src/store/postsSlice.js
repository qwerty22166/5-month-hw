import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const infoPost = createAsyncThunk(
    'infoPost',
    async function(info, {dispatch, rejectWitchValue}) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/${id}')
        const post = await response.json()

        dispatch(info(post))
    }
)

export const getPosts = createAsyncThunk(
    'getPosts',
    async function(info, {dispatch, rejectWitchValue}) {
            try {
                dispatch(preloaderOn())
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')

                if(response.status === 200) {
                    const posts = await response.json()
                    dispatch(postsInfo(posts))
                }
                else if(response.status === 404) {
                    throw 'url not found'
                }
            }catch (e) {
                dispatch(setError(e))
            }finally {
                dispatch(preloaderOff())
            }
    }
)

export const createPost = createAsyncThunk(
    'createPost',
    async function (info, {dispatch, rejectWithValue}) {

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', options)

        if(response.status === 201) {
            dispatch(setError('post created'))
        }
        else if(response.status === 404) {
            dispatch(setError('post not created'))
        }




    }
)


const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: [],
        preloader: false,
        error: "",
        post: {}
    },
    reducers: {
        postsInfo: (state, action) => {
            state.posts = action.payload
            state.error = ''
        },
        preloaderOn: (state) => {
            state.preloader = true
        },
        preloaderOff: (state) => {
            state.preloader = false
        },
        setError: (state, action) => {
            state.error = action.payload
            state.posts = []
        },
        info: (state, action) => {
            state.post = action.payload
        }
    }
})

export const {postsInfo, preloaderOn, preloaderOff, setError, info} = postsSlice.actions;

export default postsSlice.reducer;



