import { useGetPostsQuery } from "../../entities/post/api/postApi";
import PostCard from "../../entities/post/ui/PostCard";
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import styles from "./PostList.module.css";
import React, { useMemo, useState, useCallback } from "react";
import withLoading from "../../shared/lib/hoc/withLoading";

const PostList: React.FC = () => {
    const { data: posts, error } = useGetPostsQuery();
    const [minTitleLength, setMinTitleLength] = useState(5);

    const filteredPosts = useMemo(() => {
        if (!posts) return [];
        return filterByLength(posts, minTitleLength);
    }, [posts, minTitleLength]);

    const handleLengthChange = useCallback((length: number) => {
        setMinTitleLength(length);
    }, []);

    if (error) {
        return <div className={styles.error}>Ошибка при загрузке постов</div>;
    }

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>Последние посты</h2>

                <PostLengthFilter
                    minLength={minTitleLength}
                    onLengthChange={handleLengthChange}
                />

                <div className={styles.posts}>
                    {filteredPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default withLoading(PostList);