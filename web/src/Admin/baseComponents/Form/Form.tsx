import React, { useEffect, useContext, useRef, memo, useCallback } from 'react';

import { ContextForm } from './store/FormContext';
import { AdminAppFormContext } from '../../App/store/AdminAppFormContext/consts';

import { isNull, actionLoggerWarning, actionLogger } from '../../../utils';

type FormType = {
    name: string;
    children: object | [];
    onSubmit: (object, resetFormValues) => void;
    initialValues: object;
    restFormValues: boolean;
}

const Form = memo<FormType>((
	{
		name,
		children,
		onSubmit,
		initialValues,
		restFormValues
	}
) => {

	const {
		addFormToGlobalContext,
		removeFormFromGlobalContext
	} = useContext(AdminAppFormContext);

	const {
		fields,
		initForm,
		formValues,
		validateForm,
		setFormValues,
		resetFormValues
	} = useContext(ContextForm);

	const valuesRef = useRef();
	const fieldsRef = useRef();

	const handleErrors = useCallback((fields) => {
		const errors = fields.map(field => {
			return `\n${field.field}: ${field.errorMessages}`;
		});

		actionLoggerWarning(`Field validation error: ${errors.join(';')};`);
	}, []);

	const handleSuccess = useCallback((values) => {
		onSubmit(values, resetFormValues);
		actionLogger(`SUBMIT FROM: "${name}"`);

		if (restFormValues) {
			resetFormValues();
			actionLogger(`RESET FROM: "${name}"`);
		}
	}, [name, onSubmit, restFormValues, resetFormValues]);

	const submitForm = useCallback(() => {
		validateForm(fieldsRef.current, valuesRef.current)
		.then(values => handleSuccess(values))
		.catch(fields => handleErrors(fields));
	}, [handleSuccess, handleErrors, validateForm]);

	const handleSubmitOnEnter = useCallback((e) => {
		const { keyCode } = e;

		if (keyCode === 13) {
			submitForm();
		}
	}, [submitForm]);

	useEffect(() => {
		window.addEventListener('keyup', handleSubmitOnEnter);

		return () => {
			window.removeEventListener('keyup', handleSubmitOnEnter);
		};
	}, [handleSubmitOnEnter]);

	useEffect(() => {
		initForm({ name });

		return () => {
			setFormValues({});
			initForm({});
		};
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (!isNull(initialValues)) {
			setFormValues(initialValues);
		}
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialValues]);

	useEffect(() => {
		valuesRef.current = formValues;
		fieldsRef.current = fields;
	}, [formValues, fields]);

	//set submit function to global context on init
	useEffect(() => {
		addFormToGlobalContext({ [name]: { submitForm,  resetFormValues } });

		return () => {
			removeFormFromGlobalContext(name);
		};
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//submit for button type=submit
	const handleFormSubmit = e => {
		e.preventDefault();

		validateForm(fieldsRef.current, valuesRef.current)
			.then((values) => onSubmit(values, resetFormValues))
			.catch(e => console.log(e));
	};

	return (
		<form
			name={name}
			onSubmit={handleFormSubmit}
		>
			{children}
		</form>
	);
});

export { Form };
