import React from 'react';
import classes from './styles/index.module.scss';
import {Logo} from '../Logo/Logo';
import {NavigationMenuButton} from './componets/NavigationMenuButton/NavigationMenuButton';
import {NavigationMenuContent} from './componets/NavigationMenuContent/NavigationMenuContent';
import {NavigationMenuProvider} from './store/NavigationMenuProvider';

const NavigationMenu = () => {
    return (
        <div className={classes.navigationMenu}>
            <Logo/>
            <NavigationMenuProvider>
                <NavigationMenuButton/>
                <NavigationMenuContent/>
            </NavigationMenuProvider>
        </div>
    );
};

export {NavigationMenu};
