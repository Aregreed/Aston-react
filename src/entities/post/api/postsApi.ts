import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

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
            providesTags: (_result) => [
                { type: "Post", id: "LIST" },
                ...(_result?.map(({ id }) => ({ type: "Post" as const, id })) ||
                    []),
            ],
        }),
        createPost: builder.mutation<Post, Partial<Post>>({
            query: (body) => ({
                url: "posts",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Post"],
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useGetPostsByUserIdQuery,
    useCreatePostMutation,
} = postsApi;