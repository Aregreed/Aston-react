import type { Post } from "../api/postsApi";
import styles from './PostCard.module.css';
import CommentList from '../../../widgets/CommentList/ui/CommentList';

interface PostCardProps {
    post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
    return (
        <div className={`${styles.card} card`}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.content}>{post.body}</p>
            <CommentList postId={post.id} />
        </div>
    );
};

export default PostCard;