import {actionLogger, removeObjectProperty} from '../../utils';
import {
    ADD_FORM_TO_GLOBAL_CONTEXT,
    UPDATE_FORM_VALUES,
    REMOVE_FORM_FROM_GLOBAL_CONTEXT
} from './const';

export const initialState = {
    forms: {}
};

export const reducer = (state, payload) => {
    actionLogger(payload.type, payload);

    switch (payload.type) {
        case ADD_FORM_TO_GLOBAL_CONTEXT:
            return {
                ...state,
                forms: {...state.forms, ...payload.form}
            };
        case UPDATE_FORM_VALUES:
            const {formName, fieldName, value} = payload.data

            return {
                ...state,
                forms: {
                    ...state.forms,
                    [formName]: {
                        ...state.forms[formName],
                        values: {
                            ...state.forms[formName].values,
                            [fieldName]: value
                        }
                    }
                }
            };
        case REMOVE_FORM_FROM_GLOBAL_CONTEXT:
            return {
                ...state,
                forms: removeObjectProperty(state.forms, payload.form)
            };
        default:
            throw new Error();
    }
};
