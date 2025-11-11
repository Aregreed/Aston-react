import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../../../shared/layouts/MainLayout";
import PostsPage from "../../../pages/PostsPage/PostsPage";
import PostDetailsPage from "../../../pages/PostDetailsPage/PostDetailsPage";
import UserAlbumsPage from "../../../pages/UserAlbumsPage/UserAlbumsPage";
import AlbumPhotosPage from "../../../pages/AlbumPhotosPage/AlbumPhotosPage";
import UserTodosPage from "../../../pages/UserTodosPage/UserTodosPage";
import UserPostsPage from "../../../pages/UserPostsPage/UserPostsPage";

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<PostsPage />} />
                <Route path="posts" element={<PostsPage />} />
                <Route path="posts/:id" element={<PostDetailsPage />} />
                <Route path="users/:id/albums" element={<UserAlbumsPage />} />
                <Route path="albums/:id/photos" element={<AlbumPhotosPage />} />
                <Route path="users/:id/todos" element={<UserTodosPage />} />
                <Route path="users/:id/posts" element={<UserPostsPage />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;