import { createContext } from 'react';
import { ModalsProviderContextType } from '../../../../../types';

export const MODALS = {
    MEDIA_SELECT_MODAL: 'MEDIA_SELECT_MODAL',
    DELETE_DEPARTMENT_MODAL: 'DELETE_DEPARTMENT_MODAL'
};

const defaultProps: ModalsProviderContextType = {};

export const DepartmentsModalsContext = createContext(defaultProps);
