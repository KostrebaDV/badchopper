import {createContext} from 'react';
import {FormContextType} from './types';

export const ADD_FORM_TO_GLOBAL_CONTEXT = 'ADD_FORM_TO_GLOBAL_CONTEXT';
export const REMOVE_FORM_FROM_GLOBAL_CONTEXT = 'REMOVE_FORM_FROM_GLOBAL_CONTEXT';

const FormContextDefaultValues: FormContextType = {
    forms: {},
    addFormToGlobalContext: () => {},
    removeFormFromGlobalContext: () => {}
};

export const FormContext = createContext(FormContextDefaultValues);
