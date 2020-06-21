import React, {useContext} from 'react';
import classes from './styles/index.module.scss';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import {NavigationMenuButtonIcon} from './NavigationMenuButtonIcon';
import {NavigationMenuContext} from '../../store/const';

const NavigationMenuButton = () => {
    const {isOpen} = useContext(NavigationMenuContext)

    return (
        <div
            className={classes.navigationMenuButton}
        >
            {
                !isOpen && (
                    <Typography
                        variant="14"
                        className={classes.navigationMenuButton__label}
                    >
                        !!Меню
                    </Typography>
                )
            }
            <NavigationMenuButtonIcon/>
        </div>
    );
};

export {NavigationMenuButton};
