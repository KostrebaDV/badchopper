import {createContext} from 'react';
import {ModalsProviderContextType} from '../../../../../types';

export const MODALS = {
    ADD_GALLERY_MODAL: 'ADD_GALLERY_MODAL',
    DELETE_GALLERY_MODAL: 'DELETE_GALLERY_MODAL',
    GALLERY_EDIT_MODAL: 'GALLERY_EDIT_MODAL',
};

const defaultProps: ModalsProviderContextType = {};

export const GalleryModalsContext = createContext(defaultProps);
