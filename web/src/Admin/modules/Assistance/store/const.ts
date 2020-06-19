import {createContext} from 'react';
import { AssistanceContextType } from './types';

const AssistanceContextDefaultValues = {
    assistance: [],
    setAssistance: () => {},
    updateAssistance: () => {},
    removeOneAssistance: () => {}
};

export const SET_ASSISTANCE = 'SET_ASSISTANCE';
export const DELETE_ASSISTANCE = 'DELETE_ASSISTANCE';
export const UPDATE_ASSISTANCE = 'UPDATE_ASSISTANCE';
export const AssistanceContext = createContext<AssistanceContextType>(AssistanceContextDefaultValues);
export const initialState = {assistance: []};
