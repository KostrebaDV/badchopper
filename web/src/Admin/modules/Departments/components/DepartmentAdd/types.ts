export type DepartmentAddFormGeneralType = {
    hasInitialValues?: boolean;
    editMode?: boolean;
}

export type DepartmentAddFormMediaType = {
    selectedMediaId: string;
    handleSelectMedia: boolean;
    handleDeleteProcessedImage: () => void;
    hasSelectedMedia: boolean;
    showDeleteButton?: boolean;
}
