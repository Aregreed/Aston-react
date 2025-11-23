import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, CreatePostRequest, UpdatePostRequest } from "../model/types";

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    tagTypes: ["Post"],
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => "posts",
            providesTags: ["Post"],
        }),
        getPostById: builder.query<Post, number>({
            query: (id) => `posts/${id}`,
            providesTags: (_result, _error, id) => [{ type: "Post", id }],
        }),
        getPostsByUserId: builder.query<Post[], number>({
            query: (userId) => `posts?userId=${userId}`,
            providesTags: (result) => [
                { type: "Post", id: "LIST" },
                ...(result?.map(({ id }) => ({ type: "Post" as const, id })) ||
                    []),
            ],
        }),
        createPost: builder.mutation<Post, CreatePostRequest>({
            query: (body) => ({
                url: "posts",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Post"],
        }),
        updatePost: builder.mutation<Post, UpdatePostRequest>({
            query: ({ id, ...body }) => ({
                url: `posts/${id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: (_result, _error, { id }) => [
                { type: "Post", id },
            ],
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useGetPostsByUserIdQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
} = postsApi;