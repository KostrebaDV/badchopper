import {createContext} from 'react';
import {ModalsProviderContextType} from '../../../../../types';

export const MODALS = {
    ADD_ASSISTANCE_MODAL: 'ADD_ASSISTANCE_MODAL',
    ASSISTANCE_DETAIL_MODAL: 'ASSISTANCE_DETAIL_MODAL',
    DELETE_ASSISTANCE_MODAL: 'DELETE_ASSISTANCE_MODAL',
    ASSISTANCE_EDIT_MODAL: 'ASSISTANCE_EDIT_MODAL',
};

const defaultProps: ModalsProviderContextType = {};

export const AssistanceModalsContext = createContext(defaultProps);
