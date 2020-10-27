import React, {useEffect, useContext, useRef, memo, useCallback} from 'react';

import {ContextForm} from './store/FormContext';
import {FormContext as FormGlobalContext} from '../../../store/FormContext';

import {isNull, actionLoggerWarning, actionLogger} from '../../../utils';
import {usePrevious} from '../../../hooks/usePrevious';


type FormType = {
    data: object;
    name: string;
    children: object | [];
    onSubmit: (object, resetFormValues) => void;
    initialValues: object;
    resetFormValues: boolean;
    reInitOnEdit: boolean | undefined;
}

const Form = memo<FormType>((
    {
        data: environmentData,
        name,
        children,
        onSubmit,
        reInitOnEdit,
        initialValues,
        resetFormValues: resetFormValuesFromProps
    }
) => {
    const {
        addFormToGlobalContext,
        removeFormFromGlobalContext
    } = useContext(FormGlobalContext);

    const {
        fields,
        initForm,
        formValues,
        validateForm,
        setFormValues,
        resetFormValues
    } = useContext(ContextForm);

    const prevFormValues = usePrevious(formValues)

    const valuesRef = useRef();
    const fieldsRef = useRef();
    const isInit = useRef(false);

    const handleErrors = useCallback((fields) => {
        const errors = fields.map(field => {
            return `\n${field.field}: ${field.errorMessages}`;
        });

        actionLoggerWarning(`Field validation error: ${errors.join(';')};`);
    }, []);

    const handleSuccess = useCallback((values) => {
        onSubmit(values, environmentData);
        actionLogger(`SUBMIT FROM: "${name}"`);

        if (resetFormValuesFromProps) {
            resetFormValues();
            actionLogger(`RESET FROM: "${name}"`);
        }
    }, [name, onSubmit, resetFormValues, resetFormValues]);

    const submitForm = useCallback(() => {
        validateForm(fieldsRef.current, valuesRef.current)
            .then(values => handleSuccess(values))
            .catch(fields => handleErrors(fields));
    }, [handleSuccess, handleErrors, validateForm]);

    const handleSubmitOnEnter = useCallback((e) => {
        const {keyCode} = e;

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
        initForm({name});

        return () => {
            setFormValues({});
            initForm({});
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        let timeOut;
        if (!isNull(initialValues) && !isInit.current) {
            timeOut = setTimeout(() => {
                setFormValues(initialValues);
                isInit.current = true;
            }, 200)
        }

        return () => {
            clearTimeout(timeOut);
            setFormValues({});
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialValues, reInitOnEdit]);

    useEffect(() => {
        if (JSON.stringify(prevFormValues) !== JSON.stringify(formValues) && isInit.current) {
            valuesRef.current = formValues;
            fieldsRef.current = fields;
        }
    }, [formValues]);

    //set submit function to global context on init
    useEffect(() => {
        addFormToGlobalContext({[name]: {submitForm, resetFormValues, values: initialValues}});

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

export {Form};
