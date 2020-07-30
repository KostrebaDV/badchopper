type AssistanceItemType = {
    _id: string;
    name: {
        ru: string;
    };
    description: string;
}

export type AssistanceType = AssistanceItemType[]

export type AssistanceContextType = {
    assistance: AssistanceType,
    setAssistance: ([]: AssistanceType) => void;
    updateAssistance: ([]: AssistanceType) => void;
    removeOneAssistance: (assistanceID: string) => void;
};
