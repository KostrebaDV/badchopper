import React, { useReducer } from 'react';

import { reducer } from './reducer';
import {
    initialState,
    GalleryContext
} from './const';

import moduleActions from './actions';

export const GalleyContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GalleryContext.Provider
            value={{
    ...state,
    ...moduleActions(dispatch),
    }}
>
    {children}
    </GalleryContext.Provider>
);
};
