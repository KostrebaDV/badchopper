import React from 'react';
import {MainPageFooter} from './components/MainPageFooter/MainPageFooter';
import classes from './styles/index.module.scss';
import {NavigationMenuWithProvider} from '../NavigationMenu/NavigationMenu';
import {MainPageContent} from './components/MainPageContent/MainPageContent';
const MainPage = () => {
    return (
        <div className={classes.mainPage}>
            <NavigationMenuWithProvider/>
            <MainPageContent/>
            <MainPageFooter/>
        </div>
    );
};

export {MainPage};
