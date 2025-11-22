import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export const commentsApi = createApi({
    reducerPath: "commentsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    tagTypes: ["Comment"],
    endpoints: (builder) => ({
        getComments: builder.query<Comment[], void>({
            query: () => "comments",
            providesTags: ["Comment"],
        }),
        getCommentsByPostId: builder.query<Comment[], number>({
            query: (postId) => `posts/${postId}/comments`,
            providesTags: (_result, _error, postId) => [
                { type: "Comment", id: postId },
            ],
        }),
    }),
});

export const { useGetCommentsQuery, useGetCommentsByPostIdQuery } = commentsApi;