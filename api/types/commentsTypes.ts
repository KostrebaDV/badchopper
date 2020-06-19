type CommentDTOType = {
    id?: string;
    name: string;
    description: string;
    imageId: string;
}

type CommentsResponseType = {
    ops: {
        name: string;
        _id: string;
        description: string;
        imageId: string;
        image: object;
    }[]
}

export {
    CommentDTOType,
    CommentsResponseType
}
