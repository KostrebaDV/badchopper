import {createContext} from 'react';
import {AdminAppFormContextType} from './types';

export const ADD_FORM_TO_GLOBAL_CONTEXT = 'ADD_FORM_TO_GLOBAL_CONTEXT';
export const REMOVE_FORM_FROM_GLOBAL_CONTEXT = 'REMOVE_FORM_FROM_GLOBAL_CONTEXT';

const AdminAppFormContextDefaultValues: AdminAppFormContextType = {
    forms: {},
    addFormToGlobalContext: () => {},
    removeFormFromGlobalContext: () => {}
};

export const AdminAppFormContext = createContext(AdminAppFormContextDefaultValues);
