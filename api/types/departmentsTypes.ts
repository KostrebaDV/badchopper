type DepartmentDTOType = {
    id?: string;
    name: string;
    description: string;
    address: {
        city: string;
        street: string;
        number: string;
    },
    phone: string;
    location: {
        latitude: string;
        longitude: string;
    },
    imageId: string
}

type DepartmentsDTOType = DepartmentDTOType[]

export {
    DepartmentDTOType,
    DepartmentsDTOType
};
