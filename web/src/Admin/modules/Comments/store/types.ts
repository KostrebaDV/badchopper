type CommentItemType = {
    _id: string;
    description: string;
}

export type CommentsType = CommentItemType[]

export type CommentsContextType = {
    comments: CommentsType,
    setComments: ([]: CommentsType) => void;
    updateComment: ([]: CommentsType) => void;
    removeComment: (assistanceID: string) => void;
};
