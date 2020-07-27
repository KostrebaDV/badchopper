import React, {useContext} from 'react';
import classes from './styles/index.module.scss';
import menuList from './const';
import {NavigationMenuListItem} from './NavigationMenuListItem';
import {getUniqueKey} from '../../../../../utils';
import {NavigationMenuLanguageBar} from '../NavigationMenuLanguageBar/NavigationMenuLanguageBar';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import {NavigationMenuContext} from '../../store/const';
import closeIcon from '../../../../../static/images/closeIcon.svg';

const NavigationMenuList = () => {
    const {isOpen, openNavigation} = useContext(NavigationMenuContext);

    return (
        <div className={classes.navigationMenuList}>
            <div className={classes.navigationMenuList__topBar}>
                    <div onClick={() => openNavigation(!isOpen)}>
                        <Typography
                            variant="18"
                            className={classes.navigationMenuList__closeButton}
                        >
                            !!закрити&nbsp;
                        </Typography>
                        <img src={closeIcon} alt="closeIcon"/>
                    </div>
                <NavigationMenuLanguageBar/>
            </div>
            {
                menuList.map(item => {
                    return (
                        <NavigationMenuListItem
                            key={getUniqueKey()}
                            item={item}
                        />
                    );
                })
            }
        </div>
    );
};

export {NavigationMenuList};
