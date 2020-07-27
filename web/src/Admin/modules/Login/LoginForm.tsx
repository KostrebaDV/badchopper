import React from 'react';
import {FORMS} from './const';
import FormLayout, {FormLayoutItem, FormLayoutItemGroup} from '../../baseComponents/FormLayout';
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
                <FormLayoutItemGroup noPadding>
                    <FormLayoutItem>
                        <Field
                            component={Textbox}
                            name="login"
                            label="!!!User name"
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
                            label="!!!Password"
                            required
                            validate={{
                                required: true
                            }}
                        />
                    </FormLayoutItem>
                </FormLayoutItemGroup>
            </FormLayout>
        </Form>
    );
};

export {LoginForm};
