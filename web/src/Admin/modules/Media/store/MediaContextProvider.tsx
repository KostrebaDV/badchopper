import React, { useReducer } from 'react';

import { reducer } from './reducer';
import {
    initialState,
    MediaContext
} from './const';

import moduleActions from './actions';

export const MediaContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MediaContext.Provider
            value={{
    ...state,
    ...moduleActions(dispatch),
    }}
>
    {children}
    </MediaContext.Provider>
);
};
