type AssistanceItemType = {
    _id: string;
    name: string;
    description: string;
}

export type AssistanceType = AssistanceItemType[]

export type MediaContextType = {
    assistance: AssistanceType,
    setAssistance: ([]: AssistanceType) => void;
    updateAssistance: ([]: AssistanceType) => void;
    removeOneAssistance: (assistanceID: string) => void;
};
