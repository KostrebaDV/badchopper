import validators from '../../../utils/validators';

const _getValidationRules = (fieldValidations) => {
	const validationRules: { function: (string, object) => { isValid: boolean; errorMessage: never }; params: object; }[] = [];

	for (const func in fieldValidations) {
		if (fieldValidations.hasOwnProperty(func)) {
			validationRules.push({
				function: validators[func],
				params: fieldValidations[func]
			});
		}
	}

	return validationRules;
};

const _getValidateResult = (value, fieldValidations) => {
	const validationRules = _getValidationRules(fieldValidations);

	return validationRules.map(validate => {
		return validate.function(value, validate.params);
	});
};

export const validate = (value, fieldValidations) => {
	const validationResult = _getValidateResult(value, fieldValidations);
	const errorMessages = [];
	let isValid = true;

	validationResult.forEach(result => {
		if (!result.isValid) {
			isValid = result.isValid;

			errorMessages.push(result.errorMessage);
		}
	});

	return {
		isValid,
		errorMessages
	};
};

export const setValidationResult = (fields, { payload }) => {
	const { isValid, errorMessages, name } = payload;

	return {
		[name]: { ...fields[name], isValid, errorMessages }
	};
};

export const resetFormValues = (values) => {
	const resetedValues = {};

	for (const value in values) {
		if (values.hasOwnProperty(value)) {
			resetedValues[value] = null;
		}
	}

	return resetedValues;
};
