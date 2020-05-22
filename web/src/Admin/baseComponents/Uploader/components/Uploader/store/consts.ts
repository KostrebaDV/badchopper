import { createContext } from 'react';

export const SET_PENDING = 'SET_PENDING';
export const ADD_FILE_TO_QUEUE = 'ADD_FILE_TO_QUEUE';
export const REMOVE_FILE_FROM_QUEUE = 'REMOVE_FILE_FROM_QUEUE';
export const CHANGE_FILE_NAME = 'CHANGE_FILE_NAME';
export const REMOVE_ALL_FILES = 'REMOVE_ALL_FILES';

//@ts-ignore
export const UploaderContext = createContext();
