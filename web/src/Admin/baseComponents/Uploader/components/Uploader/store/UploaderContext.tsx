import React, {useContext, useReducer} from 'react';

import { reducer, initialState } from './reducer';
import moduleActions from './actions';

import { UploaderContext } from './consts';

export const useUploaderContext = () => useContext(UploaderContext);

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
