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
    ok: number;
    value: {
        imageId: string;
    };
}

type getDocumentResponseStatusType = {
    _id: string;
    imageId: string;
}

export {
    documentIdType,
    requestDocumetnParamsType,
    getDocumentResponseStatusType,
    deleteDocumentResponseStatusType,
    updateDocumentResponseStatusType
};
