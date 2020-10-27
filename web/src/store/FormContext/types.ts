type SubmitFormType = {
    submitForm: () => {};
    resetFormValues: () => {};
    values: {};
};

export type FormContextType = {
    forms: {
        [name: string]: SubmitFormType
    },
    addFormToGlobalContext: ({}) => void;
    removeFormFromGlobalContext: (name: string) => void;
    updateFormValues: (formName: string, fieldName: string, value: any) => void;
};
