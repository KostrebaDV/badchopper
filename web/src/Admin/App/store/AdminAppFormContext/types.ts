type SubmitFormType = {
    submitForm: () => {};
    resetFormValues: () => {};
};

export type AdminAppFormContextType = {
    forms: {
        [name: string]: SubmitFormType
    },
    addFormToGlobalContext: ({}) => void;
    removeFormFromGlobalContext: (name: string) => void;
};
