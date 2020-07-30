import React, {useContext} from 'react';
import classes from './styles/index.module.scss';
import {isBrowser, isMobile} from "react-device-detect";
import menuList from './const';
import {NavigationMenuListItem} from './NavigationMenuListItem';
import {getUniqueKey} from '../../../../../utils';
import {NavigationMenuLanguageBar} from '../NavigationMenuLanguageBar/NavigationMenuLanguageBar';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import {NavigationMenuContext} from '../../store/const';
import closeIcon from '../../../../../static/images/closeIcon.svg';
import { useHistory } from "react-router-dom";
import {ROUTES} from '../../../../App/routes';
import {translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';


const NavigationMenuList = () => {
    const {isOpen, openNavigation} = useContext(NavigationMenuContext);
    const history = useHistory();

    const handleAddFeedbackClick = () => {
        history.push(ROUTES.CONTACT_DETAIL);
        openNavigation(!isOpen);
    };

    return (
        <div className={classes.navigationMenuList}>
            <div className={classes.navigationMenuList__topBar}>
                {
                    isBrowser && (
                            <>
                                <div onClick={() => openNavigation(!isOpen)}>
                                    <Typography
                                        variant="18"
                                        className={classes.navigationMenuList__closeButton}
                                    >
                                        {translate(codes.close)}&nbsp;
                                    </Typography>
                                    <img src={closeIcon} alt="closeIcon"/>
                                </div>
                                <NavigationMenuLanguageBar/>
                            </>
                    )
                }
                {
                    isMobile && (
                        <div onClick={handleAddFeedbackClick}>
                            <Typography
                                variant="14"
                                className={classes.navigationMenuList__feedbackButton}
                            >
                                {translate(codes.leaveFeedback)}
                            </Typography>
                        </div>
                    )
                }
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
            {
                isMobile && (
                    <>
                        <NavigationMenuLanguageBar/>
                    </>
                )
            }
        </div>
    );
};

export {NavigationMenuList};
