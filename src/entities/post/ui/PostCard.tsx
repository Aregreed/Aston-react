import type { Post } from "../api/postApi";
import styles from './PostCard.module.css'

interface PostCardProps {
    post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
    return (
        <div className={`${styles.card} card`}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.content}>{post.body}</p>
        </div>
    );
};

export default PostCard;
