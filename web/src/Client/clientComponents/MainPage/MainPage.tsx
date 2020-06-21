import React from 'react';
import {MainPageFooter} from './components/MainPageFooter/MainPageFooter';
import classes from './styles/index.module.scss';
import {NavigationMenu} from '../NavigationMenu/NavigationMenu';
import {MainPageContent} from './components/MainPageContent/MainPageContent';

const MainPage = () => {


    return (
        <div className={classes.mainPage}>
            <NavigationMenu/>
            <MainPageContent/>
            <MainPageFooter/>
        </div>
    );
};

export {MainPage};
