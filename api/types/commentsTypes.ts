type CommentDTOItemType = {
    id?: string;
    name: string;
    surname: string;
    description: string;
    imageId: string;
    creationDate: string;
    image?: object;
}

type CommentsDTOType = CommentDTOItemType[]

type CommentsResponseDTOType = {
    ops: CommentDTOItemType[]
}

export {
    CommentDTOItemType,
    CommentsDTOType,
    CommentsResponseDTOType
}
