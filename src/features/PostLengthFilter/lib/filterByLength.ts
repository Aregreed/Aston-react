import { Post } from "../../../entities/post/api/postsApi";

export const filterByLength = (posts: Post[], minLength: number): Post[] => {
    const validMinLength = Math.max(0, minLength);
    return posts.filter((post) => post.title.length >= validMinLength);
};