import React from "react";
import styles from "./PostLengthFilter.module.css";

interface PostLengthFilterProps {
    minLength: number;
    onLengthChange: (length: number) => void;
}

const PostLengthFilter: React.FC<PostLengthFilterProps> = ({
    minLength,
    onLengthChange,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value >= 0) {
            onLengthChange(value);
        }
    };

    return (
        <div className={`${styles.filter} card`}>
            <label>
                Мин. длина заголовка поста:
                <input
                    type="number"
                    min="0"
                    max="100"
                    value={minLength}
                    onChange={handleChange}
                    className={styles.input}
                />
                символов
            </label>
        </div>
    );
};

export default PostLengthFilter;