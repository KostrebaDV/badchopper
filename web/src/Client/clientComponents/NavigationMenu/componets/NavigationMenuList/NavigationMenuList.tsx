import React, {useContext} from 'react';
import classes from './styles/index.module.scss';
import {isBrowser, isMobile} from "react-device-detect";
import menuList from './const';
import {NavigationMenuListItem} from './NavigationMenuListItem';
import {getUniqueKey} from '../../../../../utils';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import {NavigationMenuContext} from '../../store/const';
import closeIcon from '../../../../../static/images/closeIcon.svg';
import { useNavigate } from "react-router-dom";
import {ROUTES} from '../../../../App/routes';
import {translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';
import {LanguageBar} from '../../../LanguageBar/LanguageBar';

const NavigationMenuList = () => {
    const {isOpen, openNavigation} = useContext(NavigationMenuContext);
    const navigate = useNavigate();

    const handleAddFeedbackClick = () => {
        navigate(ROUTES.CONTACT_DETAIL);
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
                                        bold="600"
                                        variant="18"
                                        className={classes.navigationMenuList__closeButton}
                                    >
                                        {translate(codes.close)}&nbsp;
                                    </Typography>
                                    <img src={closeIcon} alt="closeIcon"/>
                                </div>
                                <LanguageBar
                                    openNavigation={openNavigation}
                                />
                            </>
                    )
                }
                {
                    isMobile && (
                        <div
                            className={classes.navigationMenuList__feedbackButtonWrapper}
                            onClick={handleAddFeedbackClick}
                        >
                            <Typography
                                bold="700"
                                variant="14"
                                className={classes.navigationMenuList__feedbackButton}
                            >
                                {translate(codes.leaveFeedback)}
                            </Typography>
                        </div>
                    )
                }
            </div>
            <div className={classes.navigationMenuList__wrapper}>
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
            {
                isMobile && (
                    <LanguageBar
                        className={classes.navigationMenuList__languageBar}
                        openNavigation={openNavigation}
                    />
                )
            }
        </div>
    );
};

export {NavigationMenuList};
