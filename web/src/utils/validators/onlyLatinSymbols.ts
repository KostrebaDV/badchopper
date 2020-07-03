import {isNullOrUndefined} from '../isNullOrUndefined';

export const onlyLatinSymbols = (value) => {
    if (isNullOrUndefined(value)) {
        return {
            isValid: false,
            errorMessage: '!Не должно быть пусты'
        };
    }

    return {
        // eslint-disable-next-line
        isValid: !value.match(/[^\u0000-\u007f]/),
        errorMessage: '!Только латинские символы'
    };
};
