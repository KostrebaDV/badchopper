type departmentDTOType = {
    id?: string;
    name: string;
    description: string;
    address: {
        city: string;
        street: string;
    },
    phone: string;
    location: {
        latitude: string;
        longitude: string;
    }
}

export {
    departmentDTOType
};
