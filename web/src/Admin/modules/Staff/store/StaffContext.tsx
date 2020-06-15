import React, { useReducer } from 'react';

import { reducer } from './reducer';
import {
    initialState,
    StaffContext
} from './const';

import moduleActions from './actions';

export const StaffContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StaffContext.Provider
            value={{
                ...state,
                ...moduleActions(dispatch),
            }}
            >
         {children}
        </StaffContext.Provider>
    );
};
