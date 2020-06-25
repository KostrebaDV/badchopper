import React, { useReducer } from 'react';

import { reducer } from './reducer';
import {
    AppContextDefaultValues,
    AppContext
} from './const';

import moduleActions from './actions';

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, AppContextDefaultValues);

    return (
        <AppContext.Provider
            value={{
    ...state,
    ...moduleActions(dispatch),
    }}
>
    {children}
    </AppContext.Provider>
);
};
