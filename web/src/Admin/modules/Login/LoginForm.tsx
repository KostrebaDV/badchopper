import React from 'react';
import {FORMS} from './const';
import FormLayout, {FormLayoutItem} from '../../baseComponents/FormLayout';
import Form, {Field} from '../../baseComponents/Form';
import {Textbox} from '../../baseComponents/Form/Adapters';

const LoginForm = (
    {
        handleLogin
    }
) => {
    return (
        <Form
            onSubmit={handleLogin}
            name={FORMS.LOGIN_FORM}
        >
            <FormLayout>
                <FormLayoutItem>
                    <Field
                        component={Textbox}
                        name="login"
                        label="!!!Логин"
                        required
                        validate={{
                            required: true
                        }}
                    />
                </FormLayoutItem>
                <FormLayoutItem>
                    <Field
                        component={Textbox}
                        name="password"
                        label="!!!Пароль"
                        required
                        validate={{
                            required: true
                        }}
                    />
                </FormLayoutItem>
            </FormLayout>
        </Form>
    );
};

export {LoginForm};
