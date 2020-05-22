import { isNullOrUndefined } from '../isNullOrUndefined';

export const required = (value) => {
	if (isNullOrUndefined(value)) {
		return {
			isValid: false,
			errorMessage: '!Не должно быть пусты'
		};
	}

	return {
		isValid: value.toString().trim().length !== 0,
		errorMessage: '!Не должно быть пусты'
	};
};
