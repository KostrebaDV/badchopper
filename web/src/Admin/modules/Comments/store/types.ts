type CommentItemType = {
    _id?: string;
    name: string;
    surname: string;
    description: string;
    imageId: string;
    creationDate: string;
}

export type CommentsType = CommentItemType[]

export type CommentsContextType = {
    comments: CommentsType,
    setComments: ([]: CommentsType) => void;
    setComment: ([]: CommentsType) => void;
    updateComment: ([]: CommentsType) => void;
    removeComment: (assistanceID: string) => void;
};
