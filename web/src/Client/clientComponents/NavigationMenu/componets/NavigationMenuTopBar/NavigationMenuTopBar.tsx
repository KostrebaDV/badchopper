import React, {useContext} from 'react';
import {NavigationMenuContext} from '../../store/const';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';

const NavigationMenuTopBar = () => {
    const {isOpen, openNavigation} = useContext(NavigationMenuContext);

    return (
        <div className={classes.navigationMenuTopBar}>
            <div onClick={() => openNavigation(!isOpen)}>
                <Typography
                    variant="14"
                    className={classes.navigationMenuTopBar__button}
                >
                    !!меню
                </Typography>
            </div>
            <Typography
                variant="14"
                className={classes.navigationMenuTopBar__button}
            >
                !!записатися
            </Typography>
            <Typography
                variant="14"
                className={classes.navigationMenuTopBar__button}
            >
                !!залишити відгук
            </Typography>
        </div>
    );
};

export {NavigationMenuTopBar};
