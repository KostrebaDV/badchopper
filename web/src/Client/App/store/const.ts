import {createContext} from 'react';
import { AppContextType } from './types';

export const AppContextDefaultValues = {
    departments: [],
    setDepartments: () => {},
};

export const SET_DEPARTMENTS = 'SET_DEPARTMENTS';
export const AppContext = createContext<AppContextType>(AppContextDefaultValues);
