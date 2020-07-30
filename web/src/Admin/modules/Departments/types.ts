export type DepartmentAddContentType = {
    initialValues?: {
        number: string;
        street: string;
        descriptionRU: string;
        descriptionEN: string;
        descriptionUA: string;
        cityUA: string;
        cityRU: string;
        cityEN: string;
        streetUA: string;
        streetRU: string;
        streetEN: string;
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
