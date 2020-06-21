type SubmitFormType = {
    submitForm: () => {};
    resetFormValues: () => {};
};

export type FormContextType = {
    forms: {
        [name: string]: SubmitFormType
    },
    addFormToGlobalContext: ({}) => void;
    removeFormFromGlobalContext: (name: string) => void;
};
