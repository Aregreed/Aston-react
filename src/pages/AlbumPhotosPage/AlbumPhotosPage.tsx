import React from "react";
import { useParams } from "react-router-dom";

const AlbumPhotosPage: React.FC = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Фото альбома {id}</h1>
            <p>Фотографии</p>
        </div>
    );
};

export default AlbumPhotosPage;