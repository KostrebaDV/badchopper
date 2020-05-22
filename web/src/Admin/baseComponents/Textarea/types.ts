export type TextareaType = {
    onChange?: (value) => void;
    onFieldFocus?: (focus: boolean) => void;
    onFieldChange?: (value) => void;
    name?: string;
    placeholder?: string
    value?: string
}
