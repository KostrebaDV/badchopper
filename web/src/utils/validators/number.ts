import { isNullOrUndefined } from '../isNullOrUndefined';
import { prepareValidationResult, numberValidationMessages } from './helpers';

export const number = (value, validationRules) => {
	const { min, max, equal, integer } = validationRules;

	if (isNullOrUndefined(value)) {
		return {
			isValid: true,
			errorMessage: ''
		};
	}

	const validationTemplate = {
		min: true,
		max: true,
		equal: true,
		integer: true,
		number: false
	};

	if (((value * 1000) % 1) === 0) {
		validationTemplate.number = true;

		const numValue = +value;

		if (!isNullOrUndefined(min)) {
			validationTemplate.min = min < numValue;
		}
		if (!isNullOrUndefined(max)) {
			validationTemplate.max = max > numValue;
		}
		if (!isNullOrUndefined(equal)) {
			validationTemplate.equal = equal === numValue;
		}
		if (!isNullOrUndefined(integer)) {
			validationTemplate.integer = Number.isInteger(numValue);
		}
	}

	const validationResult = prepareValidationResult(validationTemplate);
	const errorMessage = numberValidationMessages(validationResult.errorName, validationRules);

	return {
		isValid: validationResult.isValid,
		errorMessage
	};
};
