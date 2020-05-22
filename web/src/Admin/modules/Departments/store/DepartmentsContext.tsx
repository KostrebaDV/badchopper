import React, { useReducer } from 'react';

import { reducer } from './reducer';
import {
    initialState,
    DepartmentsContext
} from './const';

import moduleActions from './actions';

export const DepartmentsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DepartmentsContext.Provider
            value={{
                ...state,
                ...moduleActions(dispatch),
            }}
            >
         {children}
        </DepartmentsContext.Provider>
    );
};
