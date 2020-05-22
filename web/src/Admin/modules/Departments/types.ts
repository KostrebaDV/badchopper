export type DepartmentAddContentType = {
    initialValues?: {
        city: string;
        number: string;
        street: string;
        description: string;
        latitude: string;
        longitude: string;
        name: string;
        phone: string;
        imageId: string;
    };
    departmentId?: string;
    editMode?: boolean;
    isDepartmentDetail?: boolean;
    onEditDepartmentSuccess?: () => void;
}
