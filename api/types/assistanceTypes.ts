type AssistanceDTOType = {
    id?: string;
    name: string;
    description: string;
    imageId: string;
    price: string;
    image?: object;
}

type AssistanceResponseType = {
    name: string;
    _id: string;
    description: string;
    price: string;
    creationDate: string;
}[]

type AssistancesDTOType = AssistanceDTOType[]

export {
    AssistanceDTOType,
    AssistanceResponseType,
    AssistancesDTOType
}
