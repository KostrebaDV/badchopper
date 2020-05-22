import { createContext } from 'react';
import { ModalsProviderContextType } from '../../../../../types';

export const MODALS = {
  ADD_MEDIA_MODAL: 'ADD_MEDIA_MODAL',
  DELETE_MEDIA_MODAL: 'DELETE_MEDIA_MODAL',
};

const defaultProps: ModalsProviderContextType = {};

export const MediaModalsContext = createContext(defaultProps);
