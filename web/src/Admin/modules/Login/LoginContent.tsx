import React, {useContext} from 'react';
import {LoginForm} from './LoginForm';
import {FormContext} from '../../../store/FormContext';
import {ButtonGroup} from '../../baseComponents/ButtonGroup/ButtonGroup';
import {Button} from '../../baseComponents/Button/Button';
import classes from './styles/index.module.scss';
import {MarginBox} from '../../baseComponents/MarginBox/MarginBox';
import {login} from './api';
import {AdminAppContext} from '../../App/store/AdminAppContext/const';
import {getUniqueId} from '../../../utils';
import { useHistory } from "react-router-dom";

const LoginContent = () => {
    const {forms} = useContext(FormContext);
    const history = useHistory();
    const {showNotification} = useContext(AdminAppContext);

    const handleLoginError = code => {
        if (code === 403) {
            if (typeof showNotification !== 'undefined') {
                showNotification({
                    id: getUniqueId(),
                    type: 'danger',
                    duration: 5000,
                    message: '!!Пароль указан не верно'
                });
            }
        }

        if (code === 401) {
            if (typeof showNotification !== 'undefined') {
                showNotification({
                    id: getUniqueId(),
                    type: 'info',
                    duration: 5000,
                    message: '!!Пользователь не существует'
                });
            }
        }
    };

    const handleLogin = (data) => {
        login(data)
            .then(res => {
                if (res.status === 201) {
                    history.push("/adminPanel");
                }
            })
            .catch(error => {
                if (error.response.status) {
                    handleLoginError(error.response.status);
                }
            });
    };

    const rightButtons = (
        <Button
            actionHandler={() => forms.LOGIN_FORM.submitForm()}
            label="!!Авторизоваться"
            type="primary"
        />
    );

    return (
        <div className={classes.loginContent}>
            <LoginForm
                handleLogin={handleLogin}
            />
            <MarginBox tSmall>
                <ButtonGroup
                    rightButtons={rightButtons}
                />
            </MarginBox>
        </div>
    );
};

export {LoginContent};