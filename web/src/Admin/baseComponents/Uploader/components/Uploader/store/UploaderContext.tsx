import React, { useReducer } from 'react';

import { reducer, initialState } from './reducer';
import moduleActions from './actions';

import { UploaderContext } from './consts';

export const UploaderContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<UploaderContext.Provider
			value={{
				...state,
				...moduleActions(dispatch),
				dispatch,
			}}
		>
			{children}
		</UploaderContext.Provider>
	);
};
