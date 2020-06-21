import React from 'react';
import Form, {Field} from "../../../../../Admin/baseComponents/Form";
import {Textbox, Textarea} from "../../../FormAdapters";
import {FormFieldGroup} from '../../../FormFieldGroup/FormFieldGroup';
import {ADD_FEEDBACK_FORM} from '../../const';

const NavigationMenuForm = (
    {
        handleAddFeedback
    }
) => {
    return (
        <Form
            name={ADD_FEEDBACK_FORM}
            onSubmit={handleAddFeedback}
            restFormValues
        >
            <FormFieldGroup>
                <Field
                    required
                    label="!Ваше имя"
                    name="name"
                    component={Textbox}
                    dynamicHeight
                    validate={{required: true}}
                />
                <Field
                    required
                    label="e-mail"
                    name="email"
                    component={Textbox}
                    dynamicHeight
                    validate={{required: true}}
                />
                <Field
                    label="!Комментарий"
                    name="feedback"
                    component={Textarea}
                    dynamicHeight
                    required
                    validate={{required: true}}
                />
            </FormFieldGroup>
        </Form>
    );
};

export {NavigationMenuForm};
