import React from 'react';
import classes from './styles/index.module.scss';
import {MainPageFooterSocialLinks} from '../../../MainPage/components/MainPageFooter/MainPageFooterSocialLinks';
import {translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';
import {BasePageLayoutLeft} from '../../../BasePageLayout/BasePageLayoutLeft';

const ContactDetailPageLeftSide = () => {
    return (
        <BasePageLayoutLeft>
            <div className={classes.contactDetailPageLeftSide}>
                <div className={classes.contactDetailPageLeftSide__headLabel}>
                    {translate(codes.contactsLabel)}
                </div>
                <div className={classes.contactDetailPageLeftSide__text}>
                    {translate(codes.forAnyQuestions)}
                </div>
                <MainPageFooterSocialLinks/>
            </div>
        </BasePageLayoutLeft>
    );
};

export {ContactDetailPageLeftSide};
