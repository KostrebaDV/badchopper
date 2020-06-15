import { createContext } from 'react';
import {StaffContextType} from './types';

export const initialState = {
    staffList: [],
    setAllStaff: () => {},
    setStaff: () => {},
    updateStaff: () => {},
    removeStaff: () => {}
};
export const StaffContext = createContext<StaffContextType>(initialState);
export const SET_STAFF = 'SET_STAFF';
export const SET_ALL_STAFF = 'SET_ALL_STAFF';
export const UPDATE_STAFF = 'UPDATE_STAFF';
export const DELETE_STAFF = 'DELETE_STAFF';
