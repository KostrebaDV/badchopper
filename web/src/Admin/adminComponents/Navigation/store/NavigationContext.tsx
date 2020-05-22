import React, { useReducer } from 'react';

import { reducer } from './reducer';
import {
    initialState,
    NavigationContext
} from './const';

import moduleActions from './actions';

export const NavigationContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <NavigationContext.Provider
            value={{
                ...state,
                ...moduleActions(dispatch),
            }}
            >
         {children}
        </NavigationContext.Provider>
    );
};
