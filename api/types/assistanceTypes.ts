type AssistanceDTOType = {
    id?: string;
    name: string;
    description: string;
    price: number;
}

type AssistanceResponseType = {
    ops: {
        name: string;
        _id: string;
        description: string;
        price: string;
    }[]
}

export {
    AssistanceDTOType,
    AssistanceResponseType
}
