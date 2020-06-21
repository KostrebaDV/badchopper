import React, { useReducer } from 'react';

import { reducer } from './reducer';
import {
    TabsContextDefaultValues,
    TabsContext
} from './const';

import moduleActions from './actions';

export const TabsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, TabsContextDefaultValues);

    return (
        <TabsContext.Provider
            value={{
                ...state,
                ...moduleActions(dispatch),
            }}
        >
            {children}
        </TabsContext.Provider>
    );
};
