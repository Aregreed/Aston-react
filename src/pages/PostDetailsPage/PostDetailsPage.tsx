import React from "react";
import { useParams } from "react-router-dom";

const PostDetailsPage: React.FC = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Детали поста {id}</h1>
            <p>Информация о посте</p>
        </div>
    );
};

export default PostDetailsPage;