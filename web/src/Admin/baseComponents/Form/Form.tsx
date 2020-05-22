import React, { useEffect, useContext, useRef, memo, useCallback } from 'react';

import { ContextForm } from './store/FormContext';
import { AdminAppFormContext } from '../../AdminComponents/AdminApp/store/AdminAppFormContext';

import { isNull, actionLoggerWarning, actionLogger } from '../../../utils';

type FormType = {
    name: string;
    children: object | [];
    onSubmit: () => void;
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
        //@ts-ignore
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
        //@ts-ignore
		onSubmit(values);
		 //@ts-ignore
		actionLogger(`SUBMIT FROM: "${name}"`);

		if (restFormValues) {
			resetFormValues();
			 //@ts-ignore
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
	}, []);

	useEffect(() => {
		if (!isNull(initialValues)) {
			setFormValues(initialValues);
		}
	}, [initialValues]);

	useEffect(() => {
		valuesRef.current = formValues;
		fieldsRef.current = fields;
	}, [formValues, fields]);

	//set submit function to global context on init
	useEffect(() => {
		addFormToGlobalContext({ [name]: { submitForm } });

		return () => {
			removeFormFromGlobalContext(name);
		};
	}, []);

	//submit for button type=submit
	const handleFormSubmit = e => {
		e.preventDefault();

		validateForm(fieldsRef.current, valuesRef.current)
        //@ts-ignore
			.then((values) => onSubmit(values))
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
