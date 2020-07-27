import React, {useContext} from 'react';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {NavigationMenuContext} from '../../store/const';

const NavigationMenuButtonIcon = (
) => {
    const {isOpen, openNavigation} = useContext(NavigationMenuContext);

    const topStripClassname = ClassNames(
        classes.navigationMenuButtonIcon__topStrip,
        {
            [classes.navigationMenuButtonIcon__topStrip_open]: isOpen
        }
    );

    const downStripClassname = ClassNames(
        classes.navigationMenuButtonIcon__downStrip,
        {
            [classes.navigationMenuButtonIcon__downStrip_open]: isOpen
        }
    );
    return (
        <div
            onClick={() => openNavigation(!isOpen)}
            className={classes.navigationMenuButtonIcon__stripWrapper}
        >
            <div className={topStripClassname}></div>
            <div className={downStripClassname}></div>
        </div>
    );
};

export {NavigationMenuButtonIcon};
