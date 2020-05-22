import {createContext} from 'react';
import {AdminAppContextType} from './types';

const AdminAppContextDefaultValues: AdminAppContextType = {
    handleShowOverlayCloak: () => {},
    removeUploaderFromGlobalContext: () => {},
    addUploaderToGlobalContext: () => {},
    notifications: [],
    upLoaders: {},
    showNotification: () => {},
    removeNotification: () => {},
};

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const ADD_UPLOADER_TO_GLOBAL_CONTEXT = 'ADD_UPLOADER_TO_GLOBAL_CONTEXT';
export const REMOVE_UPLOADER_FROM_GLOBAL_CONTEXT = 'REMOVE_UPLOADER_FROM_GLOBAL_CONTEXT';

export const AdminAppContext = createContext(AdminAppContextDefaultValues);
