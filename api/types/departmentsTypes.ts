type DepartmentDTOType = {
    id?: string;
    name: string;
    publicId: string;
    description: object;
    address: {
        city: string;
        street: string;
        number: string;
    },
    phone: string;
    location: string,
    imageId: string;
    staff?: [];
    assistance?: [];
    _id?: string
}

type DepartmentsDTOType = DepartmentDTOType[]

export {
    DepartmentDTOType,
    DepartmentsDTOType
};
