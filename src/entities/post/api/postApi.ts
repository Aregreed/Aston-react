import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => "posts",
        }),
        getPostById: builder.query<Post, number>({
            query: (id) => `posts/${id}`,
        }),
        getCommentsByPostId: builder.query<Comment[], number>({
            query: (postId) => `posts/${postId}/comments`,
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useGetCommentsByPostIdQuery,
} = postsApi;