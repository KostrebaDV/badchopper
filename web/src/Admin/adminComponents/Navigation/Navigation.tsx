import React, { useEffect, useContext } from 'react';
import {NavigationContext} from './store';
import {NavigationUserInfo} from './components/NavigationUserInfo/NavigationUserInfo';
import {NavigationList} from './components/NavigationList/NavigationList';

import classes from './styles/index.module.scss'
import {getNavigationList} from './api';

const Navigation = () => {
    const {navigationList, setNavigationList} = useContext(NavigationContext);

    useEffect(() => {
        getNavigationList()
            .then(({ data }) => setNavigationList(data))
        // eslint-disable-next-line
    }, []);

    return (
        <div className={classes.adminNavigation}>
            <NavigationUserInfo/>
            <NavigationList
                navigationList={navigationList}
            />
        </div>
    );
};

export { Navigation };
