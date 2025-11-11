import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./UserTabs.module.css";

const UserTabs: React.FC = () => {
    return (
        <nav className={styles.tabs}>
            <NavLink
                to="/posts"
                className={({ isActive }) =>
                    `${styles.tab} ${isActive ? styles.active : ""}`
                }
            >
                Все посты
            </NavLink>
            <NavLink
                to="/users/1/albums"
                className={({ isActive }) =>
                    `${styles.tab} ${isActive ? styles.active : ""}`
                }
            >
                Альбомы
            </NavLink>
            <NavLink
                to="/users/1/todos"
                className={({ isActive }) =>
                    `${styles.tab} ${isActive ? styles.active : ""}`
                }
            >
                Задачи
            </NavLink>
            <NavLink
                to="/users/1/posts"
                className={({ isActive }) =>
                    `${styles.tab} ${isActive ? styles.active : ""}`
                }
            >
                Посты пользователя
            </NavLink>
        </nav>
    );
};

export default UserTabs;