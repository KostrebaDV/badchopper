import React from 'react';
import classes from './styles/index.module.scss';
import {Logo} from '../Logo/Logo';
import {NavigationMenuContent} from './componets/NavigationMenuContent/NavigationMenuContent';
import {NavigationMenuProvider} from './store/NavigationMenuProvider';
import {NavigationMenuTopBar} from './componets/NavigationMenuTopBar/NavigationMenuTopBar';

const NavigationMenu = () => {
    return (
        <div className={classes.navigationMenu}>
            <Logo/>
            <NavigationMenuProvider>
                <NavigationMenuTopBar/>
                <NavigationMenuContent/>
            </NavigationMenuProvider>
        </div>
    );
};

export {NavigationMenu};
