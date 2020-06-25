export type DepartmentType = {
    publicId?: string;
    name: string;
    description: string;
    image: {
        path: string
    };
    staff: object[]
};

export type AppContextType = {
    departments: DepartmentType[],
    setDepartments: (departments) => void;
};
