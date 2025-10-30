import { useGetPostsQuery } from '../../entities/post/api/postApi';
import PostCard from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';

const PostList = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery();

  if (isLoading) {
    return <div className={styles.loading}>Загрузка постов...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка при загрузке постов</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Последние посты</h2>
        {posts?.map(post => (
          <PostCard 
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </>
  );
};

export default PostList;
