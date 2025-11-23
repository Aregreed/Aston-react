export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type CreatePostRequest = Omit<Post, "id">;
export type UpdatePostRequest = Partial<Omit<Post, "id">> & Pick<Post, "id">;