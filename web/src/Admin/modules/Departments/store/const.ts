import { createContext } from 'react';
import {DepartmentsContextType} from './types';

export const initialState = {
    departmentsList: [],
    setAllDepartments: () => {}
};
export const DepartmentsContext = createContext<DepartmentsContextType>(initialState);
export const SET_ALL_DEPARTMENTS = 'SET_ALL_DEPARTMENTS';
