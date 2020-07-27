import React from 'react';
import classes from './styles/index.module.scss';
import {NavigationMenuLanguageBar} from '../NavigationMenuLanguageBar/NavigationMenuLanguageBar';
import {NavigationMenuList} from '../NavigationMenuList/NavigationMenuList';

const NavigationMenuContent = (
) => {
    return (
        <div className={classes.navigationMenuContent__right}>
            <NavigationMenuLanguageBar/>
            <NavigationMenuList/>
        </div>
    );
};

export {NavigationMenuContent};
