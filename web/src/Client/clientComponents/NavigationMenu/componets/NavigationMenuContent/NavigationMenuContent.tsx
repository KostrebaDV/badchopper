import React, {useContext} from 'react';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {NavigationMenuContext} from '../../store/const';
import {NavigationMenuList} from '../NavigationMenuList/NavigationMenuList';

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
        <div className={componentClassName}>
            <NavigationMenuList/>
        </div>
    );
};

export {NavigationMenuContent};
