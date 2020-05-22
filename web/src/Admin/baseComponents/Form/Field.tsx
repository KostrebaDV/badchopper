import React, { useContext, useRef, useCallback, useEffect, useState } from 'react';
import { ContextForm } from './store/FormContext';

import { validate as validateFromUtils } from './utils';
import { isUndefined } from '../../../utils';

const Field = (props) => {
	const { name, component, validate } = props;
	const {
		fields,
		formValues,
		setFieldValue,
		registerField,
		setFieldValidationResult
	} = useContext(ContextForm);
	const [hasFocus, setHasFocus] = useState(false);
	const isRegistered = useRef(false);
	const prevValue = useRef(null);

	useEffect(() => {
		registerField({
			name,
			validate,
			value: null,
			isValid: true,
			isTouched: false,
			errorMessages: [],
			hasValidationError: false
		});

		isRegistered.current = true;

		return () => {
			isRegistered.current = false;
		};
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const validateField = useCallback((value) => {
		if (isUndefined(validate) || prevValue.current === value) return;

		const validationResult = validateFromUtils(value, validate);

		prevValue.current = value;
		setFieldValidationResult(validationResult, name);
	}, [validate, setFieldValidationResult, name]);

	const handleChange = useCallback(value => {
		validateField(value);

		setFieldValue({
			[name]: value
		});
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name, setFieldValue, validate, validateField]);

	const handleFieldFocus = (hasFocus) => {
		setHasFocus(hasFocus);
	};

	const Component = component;

	return (
		<>
			{
				isRegistered.current && (
					<Component
						isValid={fields[name].isValid}
						errorMessages={fields[name].errorMessages}
						onFieldChange={handleChange}
						onFieldFocus={handleFieldFocus}
						value={formValues[name]}
						hasFocus={hasFocus}
						{...props}
					/>
				)
			}
		</>
	);
};

export { Field };
