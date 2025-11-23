import React from "react";
import { Post } from "../model/types";
import styles from "./PostCard.module.css";
import CommentList from "../../../widgets/CommentList/ui/CommentList";

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div className={`${styles.card} card`}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.content}>{post.body}</p>
            <CommentList postId={post.id} />
        </div>
    );
};

export default PostCard;