import React from 'react';
import Form, {Field} from "../../../../../Admin/baseComponents/Form";
import {Textbox, Textarea} from "../../../FormAdapters";
import {FormFieldGroup} from '../../../FormFieldGroup/FormFieldGroup';
import {ADD_FEEDBACK_FORM} from '../../const';
import {translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';

const ContactForm = (
    {
        handleAddFeedback
    }
) => {
    return (
        <Form
            name={ADD_FEEDBACK_FORM}
            onSubmit={handleAddFeedback}
            resetFormValues
        >
            <FormFieldGroup>
                <Field
                    required
                    placeholder={`${translate(codes.yourName)} *`}
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
                    placeholder={`${translate(codes.comment)} *`}
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
