type requestDocumetnParamsType = {
    params: {
        id: string
    }
}

type documentIdType = {
    id: string;
}

type deleteDocumentResponseStatusType = {
    deletedCount?: number;
    value?: { [key: string]: string | number; }
}

type updateDocumentResponseStatusType = {
    ok: number
}

type getDocumentResponseStatusType = object[]

export {
    documentIdType,
    requestDocumetnParamsType,
    getDocumentResponseStatusType,
    deleteDocumentResponseStatusType,
    updateDocumentResponseStatusType
};
