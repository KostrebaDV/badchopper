import {createContext} from 'react';
import {ModalsProviderContextType} from '../../../../../types';

export const MODALS = {
    DELETE_STAFF_MODAL: 'DELETE_STAFF_MODAL',
    STAFF_MODAL: 'STAFF_MODAL',
    STAFF_DETAIL_MODAL: 'STAFF_DETAIL_MODAL',
};

const defaultProps: ModalsProviderContextType = {};

export const StaffModalsContext = createContext(defaultProps);
