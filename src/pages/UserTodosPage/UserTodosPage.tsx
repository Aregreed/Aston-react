import React from "react";
import { useParams } from "react-router-dom";

const UserTodosPage: React.FC = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Задачи пользователя {id}</h1>
            <p>Список задач</p>
        </div>
    );
};

export default UserTodosPage;