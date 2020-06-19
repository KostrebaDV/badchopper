import {createContext} from 'react';
import {ModalsProviderContextType} from '../../../../../types';

export const MODALS = {
    COMMENT_MODAL: 'COMMENT_MODAL',
    DELETE_COMMENT_MODAL: 'DELETE_COMMENT_MODAL'
};

const defaultProps: ModalsProviderContextType = {};

export const CommentsModalsContext = createContext(defaultProps);
