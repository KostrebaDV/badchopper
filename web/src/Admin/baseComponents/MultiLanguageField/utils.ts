import {isUndefined} from '../../../utils';

const GLOBAL = {
    code: undefined,
    name: ''
};

const geElements = () => {
    return {
        languageCodeLabel: document.getElementsByClassName(`languageCodeLabel_${GLOBAL.name}`),
        fields: document.getElementsByClassName(`multiLanguageFieldComponent_${GLOBAL.name}`)
    };
}

const _getActiveCodeLabel = () => {
    return document.querySelectorAll(`[data-languagecode=${GLOBAL.code}]`)[0];
}

const _getActiveField = () => {
    return document.querySelectorAll(`[data-languagecodefield=${GLOBAL.code}]`)[0];
}

const _removeActiveClasses = () => {
    // @ts-ignore
    [...geElements().languageCodeLabel].forEach(element => {
        element.classList.remove("languageCodeLabel_active");
    });

    // @ts-ignore
    [...geElements().fields].forEach(element => {
        element.classList.remove("languageField_active");
    });
};

export const setActiveTranslationCode = (code, name) => {
    GLOBAL.code = code;
    GLOBAL.name = name;

    _removeActiveClasses();

    if (!isUndefined(_getActiveCodeLabel()) && !isUndefined(_getActiveField())) {
        _getActiveCodeLabel().classList.add('languageCodeLabel_active');
        _getActiveField().classList.add('languageField_active');
    }
};
