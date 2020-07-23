import React from 'react';
import {LoginContent} from './LoginContent';
import {AdminAppContextProvider} from '../../App/store/AdminAppContext/AdminAppContext';
import {Notification} from '../../baseComponents/Notification/Notification';

const Login = () => {
    return (
        <AdminAppContextProvider>
            <LoginContent />
            <Notification />
        </AdminAppContextProvider>
    );
};

export {Login};
