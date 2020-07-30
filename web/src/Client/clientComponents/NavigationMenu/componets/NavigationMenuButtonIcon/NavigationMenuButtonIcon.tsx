import React, {useContext} from 'react';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {NavigationMenuContext} from '../../store/const';

const NavigationMenuButtonIcon = (
    {
        className
    }
) => {
    const {isOpen, openNavigation} = useContext(NavigationMenuContext);

    const componentClassName = ClassNames(
        classes.navigationMenuButtonIcon__stripWrapper,
        className
    );

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

    const middleStripClassname = ClassNames(
        classes.navigationMenuButtonIcon__MiddleStrip,
        {
            [classes.navigationMenuButtonIcon__MiddleStrip_open]: isOpen
        }
    );

    return (
        <div
            onClick={() => openNavigation(!isOpen)}
            className={componentClassName}
        >
            <div className={topStripClassname}></div>
            <div className={middleStripClassname}></div>
            <div className={downStripClassname}></div>
        </div>
    );
};

NavigationMenuButtonIcon.defaultProps = {
    className: ''
};

export {NavigationMenuButtonIcon};
