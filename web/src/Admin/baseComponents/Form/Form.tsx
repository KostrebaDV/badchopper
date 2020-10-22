import React, { useEffect, useContext, useRef, memo, useCallback } from 'react';

import { ContextForm } from './store/FormContext';
import { FormContext} from '../../../store/FormContext';

import { isNull, actionLoggerWarning, actionLogger } from '../../../utils';

type FormType = {
    name: string;
    children: object | [];
    onSubmit: (object, resetFormValues) => void;
    initialValues: object;
    restFormValues: boolean;
    reInitOnEdit: boolean | undefined;
}

const Form = memo<FormType>((
	{
		name,
		children,
		onSubmit,
        reInitOnEdit,
		initialValues,
		restFormValues
	}
) => {
	const {
        addFormToGlobalContext,
        removeFormFromGlobalContext,
        updateFormValues
    } = useContext(FormContext);

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
	    let timeOut;
		if (!isNull(initialValues)) {
		    timeOut = setTimeout(() => {
                setFormValues(initialValues);
            }, 50)
		}

        return () => {
            clearTimeout(timeOut);
            setFormValues({});
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialValues, reInitOnEdit]);

	useEffect(() => {
        valuesRef.current = formValues;
        fieldsRef.current = fields;

        updateFormValues(name, formValues);
    }, []);

	//set submit function to global context on init
	useEffect(() => {
        addFormToGlobalContext({[name]: {submitForm, resetFormValues, formValues}});

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
