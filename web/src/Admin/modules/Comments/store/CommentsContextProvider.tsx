import React, { useReducer } from 'react';

import { reducer } from './reducer';
import {
    initialState,
    CommentsContext
} from './const';

import moduleActions from './actions';

export const CommentsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CommentsContext.Provider
            value={{
    ...state,
    ...moduleActions(dispatch),
    }}
>
    {children}
    </CommentsContext.Provider>
);
};
