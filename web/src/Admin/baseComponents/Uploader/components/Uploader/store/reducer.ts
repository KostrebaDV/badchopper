import { actionLogger, removeArrayElementByIndex } from '../../../../../../utils';
import { updateFileName } from '../utils';

import {
	SET_PENDING,
	CHANGE_FILE_NAME,
	REMOVE_ALL_FILES,
	ADD_FILE_TO_QUEUE,
	REMOVE_FILE_FROM_QUEUE
} from './consts';

export const initialState = {
	files: [],
	isPending: false,
};

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload, SET_PENDING);

	switch (payload.type) {
		case ADD_FILE_TO_QUEUE:
			return {
				...state,
				files: [...state.files, payload.file]
			};
		case REMOVE_FILE_FROM_QUEUE:
			return {
				...state,
				files: removeArrayElementByIndex(state.files, payload.index)
			};
		case CHANGE_FILE_NAME:
			return {
				...state,
				files: updateFileName(state.files, payload.name, payload.index)
			};
		case REMOVE_ALL_FILES:
			return {
				...state,
				files: []
			};
		default:
			throw new Error();
	}
};
