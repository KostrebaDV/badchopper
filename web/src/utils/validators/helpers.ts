const prepareValidationResult = (validationTemplate) => {
	let isValid = true;
	let errorName: null | string = null;

	for (const result in validationTemplate) {
		if (validationTemplate.hasOwnProperty(result)) {
			if (!validationTemplate[result]) {
				isValid = validationTemplate[result];
				errorName = result;
			}
		}
	}

	return {
		isValid,
		errorName
	};
};

const numberValidationMessages = (validationErrorName, validationRules) => {
	const { min, max, equal } = validationRules;

	const messages = {
		min: `!Минимамально значение: ${min}`,
		max: `!Максимальное значение: ${max}`,
		equal: `!Должно равнятся: ${equal}`,
		integer: '!Только целое число',
		number: '!Только число',
	};

	return messages[validationErrorName];
};

const lengthValidationMessages = (validationErrorName, validationRules) => {
	const { min, max, equal } = validationRules;

	const messages = {
		min: `!Не меньше ${min} символов`,
		max: `!Не больше ${max} символов`,
		equal: `!Должно быть ${equal} символов`
	};

	return messages[validationErrorName];
};

export {
	prepareValidationResult,
	numberValidationMessages,
	lengthValidationMessages
};
