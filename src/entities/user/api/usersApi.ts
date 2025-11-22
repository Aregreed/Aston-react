import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => "users",
            providesTags: ["User"],
        }),
        getUserById: builder.query<User, number>({
            query: (id) => `users/${id}`,
            providesTags: (_result, _error, id) => [{ type: "User", id }],
        }),
    }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;