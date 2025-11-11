import React from "react";
import { useParams } from "react-router-dom";

const UserPostsPage: React.FC = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Посты пользователя {id}</h1>
            <p>Посты пользователя</p>
        </div>
    );
};

export default UserPostsPage;