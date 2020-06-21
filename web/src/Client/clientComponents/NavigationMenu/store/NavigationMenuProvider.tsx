import React, { useReducer } from 'react';

import { reducer } from './reducer';
import {
    initialState,
    NavigationMenuContext
} from './const';

import moduleActions from './actions';

export const NavigationMenuProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <NavigationMenuContext.Provider
            value={{
                ...state,
                ...moduleActions(dispatch),
            }}
        >
            {children}
        </NavigationMenuContext.Provider>
    );
};
