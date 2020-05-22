import React, { useReducer } from 'react';

import { reducer } from './reducer';
import {
    initialState,
    AssistanceContext
} from './const';

import moduleActions from './actions';

export const AssistanceContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AssistanceContext.Provider
            value={{
    ...state,
    ...moduleActions(dispatch),
    }}
>
    {children}
    </AssistanceContext.Provider>
);
};
