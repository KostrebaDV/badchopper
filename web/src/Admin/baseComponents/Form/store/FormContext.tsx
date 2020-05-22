import React, { useReducer } from 'react';
import {
	INIT_FIELDS,
	INIT_FORM_NAME,
	SET_FORM_VALID,
	SET_FIELD_VALUE,
	RESET_FORM_VALUES,
	SET_FIELD_VALIDATION_RESULT
} from './consts';
import {
	validate as validateFromUtils,
	setValidationResult as setValidationResultFromUtils,
	resetFormValues as resetFormValuesFromUtils
} from '../utils';
import { isUndefined } from '../../../../utils';

//@ts-ignore
const ContextForm = React.createContext();

const initialState = {
	formName: '',
	fields: {},
	formValidationRules: [],
	formValues: {},
	isFormValid: true,
};

const reducer = (state, payload) => {
	switch (payload.type) {
		case INIT_FORM_NAME:
		return {
			...state,
			formName: payload.name
		};
		case INIT_FIELDS:
			return {
				...state,
				fields: { ...state.fields, ...payload.field }
			};
		case SET_FIELD_VALUE:
			return {
				...state,
				formValues: { ...state.formValues, ...payload.field }
			};
		case SET_FORM_VALID:
			return {
				...state,
				isFormValid: payload.valid
			};
		case SET_FIELD_VALIDATION_RESULT:
			const field = setValidationResultFromUtils(state.fields, payload);

			return {
				...state,
				fields: { ...state.fields, ...field }
			};
		case RESET_FORM_VALUES:
			return {
				...state,
				formValues: resetFormValuesFromUtils(state.formValues)
			};
	}
};

function FormContextProvider (props) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const registerField = (fieldObject) => {
		dispatch({
			type: INIT_FIELDS,
			field: {
				[fieldObject.name]: {
					...fieldObject
				}
			}
		});

		dispatch({
			type: SET_FIELD_VALUE,
			field: { [fieldObject.name]: fieldObject.value }
		});
	};

	const setFieldValue = (field) => {
		dispatch({
			type: SET_FIELD_VALUE,
			field
		});
	};

	const setFieldValidationResult = (validationResult, name) => {
		const { isValid, errorMessages } = validationResult;

		const payload = {
			name,
			isValid,
			errorMessages
		};

		dispatch({
			type: SET_FIELD_VALIDATION_RESULT,
			payload
		});
	};

	const setFormValues = (initialValues) => {
		for (const item in initialValues) {
			if (initialValues.hasOwnProperty(item)) {
				const field = { [item]: initialValues[item] };

				dispatch({
					type: SET_FIELD_VALUE,
					field
				});
			}
		}
	};

	const _initFormName = (name) => {
		dispatch({
			type: INIT_FORM_NAME,
			name
		});
	};

	const setIsFormValid = valid => {
		dispatch({
			type: SET_FORM_VALID,
			valid
		});
	};

	const resetFormValues = () => {
		dispatch({ type: RESET_FORM_VALUES });
	};

	const validateForm = (fields, values) => {
		const validationResult: { isValid: boolean, errorMessages: never[], field: string }[] = [];

		for (const field in fields) {
			if (fields.hasOwnProperty(field)) {
				const { validate } = fields[field];

				if (isUndefined(validate)) {
				    //@ts-ignore
					validationResult.push(true);
				} else {
					const { isValid, errorMessages } = validateFromUtils(values[field], validate);

					const payload = {
						name: field,
						isValid,
						errorMessages
					};

					dispatch({
						type: SET_FIELD_VALIDATION_RESULT,
						payload
					});

					validationResult.push({ isValid, errorMessages, field });
				}
			}
		}

		const hasError = validationResult.some(result => result.isValid === false);

		const errorFields = validationResult.filter(result => result.isValid === false);

		return new Promise((resolve, reject) => {
			return hasError ? reject(errorFields) : resolve(values);
		});
	};

	const initForm = ({ name }) => {
		_initFormName(name);
	};

	return (
		<ContextForm.Provider value={{
			...state,
			initForm,
			validateForm,
			setFieldValue,
			resetFormValues,
			setFormValues, // only on init
			registerField,
			setFieldValidationResult,
			setIsFormValid, //try not to use
		}}
		>
			{props.children}
		</ContextForm.Provider>
	);
}

export { ContextForm, FormContextProvider };
