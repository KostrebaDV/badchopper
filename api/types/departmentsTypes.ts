type departmentDTOType = {
    id: string;
    name: string;
    description: string;
    address: {
        city: string;
        street: string;
    }
}

type requestParamsType = {
    params: {
        id: string
    }
}

type departmentIdDTOType = {
    id: string;
}

type deleteDocumentResponseStatusType = {
    deletedCount: number
}

type updateDocumentResponseStatusType = {
    ok: number
}

type getDocumentResponseStatusType = object[]

export {
    requestParamsType,
    departmentDTOType,
    departmentIdDTOType,
    getDocumentResponseStatusType,
    deleteDocumentResponseStatusType,
    updateDocumentResponseStatusType
};
