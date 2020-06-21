import React, {useContext} from 'react';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {NavigationMenuButtonIcon} from '../NavigationMenuButton/NavigationMenuButtonIcon';
import {NavigationMenuContentRight} from './NavigationMenuContentRight';
import {NavigationMenuContentLeft} from './NavigationMenuContentLeft';
import {NavigationMenuContext} from '../../store/const';

const NavigationMenuContent = () => {
    const {isOpen} = useContext(NavigationMenuContext);

    const componentClassName = ClassNames(
        classes.navigationMenuContent,
        {
            [classes.navigationMenuContent__open]: isOpen,
            [classes.navigationMenuContent__close]: !isOpen
        }
    );

    return (
        <div
            className={componentClassName}
        >
            <NavigationMenuButtonIcon/>
            <NavigationMenuContentLeft/>
            <NavigationMenuContentRight/>
        </div>
    );
};

export {NavigationMenuContent};
