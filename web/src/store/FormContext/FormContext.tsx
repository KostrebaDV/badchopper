import React, { useReducer } from 'react';

import { reducer, initialState } from './reducer';
import {
    ADD_FORM_TO_GLOBAL_CONTEXT,
    UPDATE_FORM_VALUES,
    REMOVE_FORM_FROM_GLOBAL_CONTEXT,
    FormContext
} from './const';

export const FormContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addFormToGlobalContext = (form) => {
        dispatch({
            type: ADD_FORM_TO_GLOBAL_CONTEXT,
            form
        });
    };

    const updateFormValues = (form, values) => {
        dispatch({
            type: UPDATE_FORM_VALUES,
            form,
            values
        });
    };

    const removeFormFromGlobalContext = (form) => {
        dispatch({
            type: REMOVE_FORM_FROM_GLOBAL_CONTEXT,
            form
        });
    };

    return (
        <FormContext.Provider
			value={{
                ...state,
                removeFormFromGlobalContext,
                updateFormValues,
                addFormToGlobalContext
            }}
		>
			{children}
		</FormContext.Provider>
	);
};
