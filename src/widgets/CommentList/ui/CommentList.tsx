import React, { useState, useCallback } from "react";
import { useGetCommentsByPostIdQuery } from "../../../entities/post/api/postApi";
import { useTheme } from "../../../shared/lib/theme";
import styles from "./CommentList.module.css";

interface CommentListProps {
    postId: number;
}

const CommentList: React.FC<CommentListProps> = ({ postId }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { theme } = useTheme();
    const {
        data: comments,
        isLoading,
        error,
    } = useGetCommentsByPostIdQuery(postId, {
        skip: !isExpanded,
    });

    const toggleComments = useCallback(() => {
        setIsExpanded((prev) => !prev);
    }, []);

    if (error) {
        return <div className={styles.error}>Ошибка загрузки комментариев</div>;
    }

    return (
        <div className={`${styles.commentList} ${styles[theme]}`}>
            <button onClick={toggleComments} className={styles.toggleButton}>
                {isExpanded ? "Скрыть комментарии" : "Показать комментарии"}
            </button>

            {isExpanded && (
                <div className={styles.comments}>
                    {isLoading ? (
                        <div>Загрузка комментариев...</div>
                    ) : (
                        comments?.map((comment) => (
                            <div key={comment.id} className={styles.comment}>
                                <h4>{comment.name}</h4>
                                <p className={styles.email}>{comment.email}</p>
                                <p>{comment.body}</p>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default CommentList;