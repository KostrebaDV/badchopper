import {createContext} from 'react';
import {FormContextType} from './types';

export const ADD_FORM_TO_GLOBAL_CONTEXT = 'ADD_FORM_TO_GLOBAL_CONTEXT';
export const UPDATE_FORM_VALUES = 'UPDATE_FORM_VALUES';
export const REMOVE_FORM_FROM_GLOBAL_CONTEXT = 'REMOVE_FORM_FROM_GLOBAL_CONTEXT';

const FormContextDefaultValues: FormContextType = {
    forms: {},
    addFormToGlobalContext: () => {
    },
    updateFormValues: () => {
    },
    removeFormFromGlobalContext: () => {
    }
};

export const FormContext = createContext(FormContextDefaultValues);
