import React from 'react';
import classes from './styles/index.module.scss';

const NavigationMenuLanguageBar = () => {
    return (
        <div className={classes.navigationMenuLanguageBar}>
            <div className={classes.navigationMenuLanguageBar__item}>EN</div>
            <div className={classes.navigationMenuLanguageBar__item}>RU</div>
            <div className={classes.navigationMenuLanguageBar__item}>UK</div>
        </div>
    );
};

export {NavigationMenuLanguageBar};
