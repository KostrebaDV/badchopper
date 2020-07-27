import React from 'react';
import Form, {Field} from "../../../../../Admin/baseComponents/Form";
import {Textbox, Textarea} from "../../../FormAdapters";
import {FormFieldGroup} from '../../../FormFieldGroup/FormFieldGroup';
import {ADD_FEEDBACK_FORM} from '../../const';

const ContactForm = (
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
                    placeholder="!Ваше имя *"
                    name="name"
                    component={Textbox}
                    validate={{required: true}}
                />
                <Field
                    required
                    placeholder="e-mail *"
                    name="email"
                    component={Textbox}
                    validate={{required: true}}
                />
                <Field
                    placeholder="!Комментарий *"
                    name="feedback"
                    component={Textarea}
                    required
                    validate={{required: true}}
                />
            </FormFieldGroup>
        </Form>
    );
};

export {ContactForm};
