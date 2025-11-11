import React from "react";
import { useParams } from "react-router-dom";

const UserAlbumsPage: React.FC = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Альбомы пользователя {id}</h1>
            <p>Список альбомов</p>
        </div>
    );
};

export default UserAlbumsPage;