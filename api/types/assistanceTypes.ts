type AssistanceDTOType = {
    id?: string;
    name: string;
    description: string;
    price: number;
}

type AssistanceResponseType = {
    name: string;
    _id: string;
    description: string;
    price: string;
    creationDate: string;
}[]

export {
    AssistanceDTOType,
    AssistanceResponseType
}
