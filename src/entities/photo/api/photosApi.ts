import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export const photosApi = createApi({
    reducerPath: "photosApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    tagTypes: ["Photo"],
    endpoints: (builder) => ({
        getPhotos: builder.query<Photo[], void>({
            query: () => "photos",
            providesTags: ["Photo"],
        }),
        getPhotosByAlbumId: builder.query<Photo[], number>({
            query: (albumId) => `albums/${albumId}/photos`,
            providesTags: (_result, _error, albumId) => [
                { type: "Photo", id: albumId },
            ],
        }),
    }),
});

export const { useGetPhotosQuery, useGetPhotosByAlbumIdQuery } = photosApi;