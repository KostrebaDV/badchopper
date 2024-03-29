import React, {useContext, useEffect} from 'react';
import {LoginForm} from './LoginForm';
import {FormContext} from '../../../store/FormContext';
import {ButtonGroup} from '../../baseComponents/ButtonGroup/ButtonGroup';
import {Button} from '../../baseComponents/Button/Button';
import classes from './styles/index.module.scss';
import {MarginBox} from '../../baseComponents/MarginBox/MarginBox';
import {login} from './api';
import {AdminAppContext} from '../../App/store/AdminAppContext/const';
import {getUniqueId, isNullOrUndefined} from '../../../utils';
import { useNavigate } from "react-router-dom";
import {Typography} from '../../baseComponents/Typography/Typography';
import {PaddingBox} from '../../baseComponents/PaddingBox/PaddingBox';
import Cookies from 'js-cookie';

const LoginContent = () => {
    const {forms} = useContext(FormContext);
    const navigate = useNavigate();
    const {showNotification} = useContext(AdminAppContext);
    const token = Cookies.get('access_token');

    useEffect(() => {
        if (!isNullOrUndefined(token)) {
            navigate("/adminPanel/departments/list");
        }
    }, [token, navigate]);

    const handleLoginError = code => {
        if (code === 403) {
            if (typeof showNotification !== 'undefined') {
                showNotification({
                    id: getUniqueId(),
                    type: 'danger',
                    duration: 5000,
                    message: 'Пароль указан не верно'
                });
            }
        }

        if (code === 401) {
            if (typeof showNotification !== 'undefined') {
                showNotification({
                    id: getUniqueId(),
                    type: 'info',
                    duration: 5000,
                    message: 'Пользователь не существует'
                });
            }
        }
    };

    const handleLogin = (data) => {
        login(data)
            .then(res => {
                if (res.status === 201) {
                    navigate("/adminPanel/departments/list");
                }
            })
            .catch(error => {
                if (error.response.status) {
                    handleLoginError(error.response.status);
                }
            });
    };

    const loginButton = (
        <Button
            actionHandler={() => forms.LOGIN_FORM.submitForm()}
            label="Login"
            type="primary"
        />
    );

    return (
        <div className={classes.loginPage}>
            <PaddingBox
                large
                className={classes.loginContent}
            >
                <Typography
                    className={classes.loginContentHeader}
                    variant='26'
                >
                    BadChopper control panel
                </Typography>
                <LoginForm
                    handleLogin={handleLogin}
                />
                <MarginBox tSmall>
                    <ButtonGroup
                        singleButton={loginButton}
                    />
                </MarginBox>
            </PaddingBox>
        </div>
    );
};

export {LoginContent};
