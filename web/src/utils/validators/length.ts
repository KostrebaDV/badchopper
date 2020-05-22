import { isNullOrUndefined } from '../isNullOrUndefined';
import { lengthValidationMessages, prepareValidationResult } from './helpers';

export const length = (value, validationRules) => {
	const { min, max, equal } = validationRules;

	if (isNullOrUndefined(value)) {
		return {
			isValid: true,
			errorMessage: ''
		};
	}

	const validationTemplate = {
		min: true,
		max: true,
		equal: true
	};

	if (!isNullOrUndefined(min)) {
		validationTemplate.min = min <= value.length;
	}
	if (!isNullOrUndefined(max)) {
		validationTemplate.max = max >= value.length;
	}
	if (!isNullOrUndefined(equal)) {
		validationTemplate.equal = equal === value.length;
	}

	const validationResult = prepareValidationResult(validationTemplate);
	const errorMessage = lengthValidationMessages(validationResult.errorName, validationRules);

	return {
		isValid: validationResult.isValid,
		errorMessage
	};
};
