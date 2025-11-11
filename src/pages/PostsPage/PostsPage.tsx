import React from "react";
import PostList from "../../widgets/PostList/PostList";
import styles from "../../widgets/PostList/PostList.module.css";

const PostsPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Все посты</h1>
            <PostList />
        </div>
    );
};

export default PostsPage;