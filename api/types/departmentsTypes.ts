type departmentDTOType = {
    name: string;
    description: string;
    address: {
        city: string;
        street: string;
    }
}

type deleteDepartmentDTOType = {
    id: string;
}

export {
    departmentDTOType,
    deleteDepartmentDTOType
};
