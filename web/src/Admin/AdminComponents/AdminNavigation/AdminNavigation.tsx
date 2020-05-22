import React from 'react';
import {AdminNavigationUserInfo} from './components/AdminNavigationUserInfo/AdminNavigationUserInfo';
import {AdminNavigationList} from './components/AdminNavigationList/AdminNavigationList';

import classes from './styles/index.module.scss'

const AdminNavigation = () => {
    return (
        <div className={classes.adminNavigation}>
            <AdminNavigationUserInfo/>
            <AdminNavigationList/>
        </div>
    );
};

export { AdminNavigation };
