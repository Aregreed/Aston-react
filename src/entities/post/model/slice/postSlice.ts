import {createSlice, createEntityAdapter, PayloadAction} from "@reduxjs/toolkit";
import { Post } from "../../api/postsApi";

const postsAdapter = createEntityAdapter<Post>({
    sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const postSlice = createSlice({
    name: "post",
    initialState: postsAdapter.getInitialState({
        loading: false,
        error: null as string | null,
    }),
    reducers: {
        postAdded: postsAdapter.addOne,
        postUpdated: postsAdapter.updateOne,
        postDeleted: postsAdapter.removeOne,
        postsReceived: (state, action: PayloadAction<Post[]>) => {
            postsAdapter.setAll(state, action.payload);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds,
} = postsAdapter.getSelectors();

export const {
    postAdded,
    postUpdated,
    postDeleted,
    postsReceived,
    setLoading,
    setError,
} = postSlice.actions;
export default postSlice.reducer;