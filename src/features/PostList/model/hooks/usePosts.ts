import { useMemo } from "react";
import { useGetPostsQuery } from "../../../../entities/post/api/postsApi";
import { filterByLength } from "../../../PostLengthFilter/lib/filterByLength";

export const usePosts = (minTitleLength: number = 5) => {
    const { data: posts, isLoading, error, refetch } = useGetPostsQuery();

    const filteredPosts = useMemo(() => {
        if (!posts) return [];
        return filterByLength(posts, minTitleLength);
    }, [posts, minTitleLength]);

    return {
        posts: filteredPosts,
        isLoading,
        error,
        allPosts: posts || [],
        refetch,
    };
};