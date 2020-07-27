import React from 'react';
import classes from './styles/index.module.scss';
import {MainPageFooterSocialLinks} from '../../../MainPage/components/MainPageFooter/MainPageFooterSocialLinks';

const ContactDetailPageLeftSide = () => {
    return (
        <div className={classes.contactDetailPageLeftSide}>
            <div className={classes.contactDetailPageLeftSide__headLabel}>
                Контакты
            </div>
            <div className={classes.contactDetailPageLeftSide__text}>
                !!По поводу любых вопросов и предложений!
            </div>
            <MainPageFooterSocialLinks noMargin/>
        </div>
    );
};

export {ContactDetailPageLeftSide};
