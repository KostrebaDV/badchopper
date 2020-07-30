import React from 'react';
import classes from './styles/index.module.scss';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import scissorsSvgUrl from "../../../../../static/images/scissors.svg";
import bookingRoundText from "../../../../../static/images/bookingRoundText.svg";
import {MainPageFooterSocialLinks} from './MainPageFooterSocialLinks';
import {codes} from '../../../../../static/translations/codes';
import {translate} from '../../../../../utils';

const MainPageFooter = () => {
    return (
        <div className={classes.mainPageFooter}>
            <div className={classes.mainPageFooter__leftSide}>
                <Typography
                    variant="32"
                    lineHeight="1"
                    className={classes.mainPageFooter__bookingText}
                >
                    {translate(codes.bookUpOnlineRightNow)}
                </Typography>
                <img
                    src={bookingRoundText}
                    alt="bookingRoundText"
                    className={classes.mainPageFooter__bookingRoundText}
                />
                <img
                    className={classes.mainPageFooter__scissors}
                    src={scissorsSvgUrl} alt="scissors"
                />
            </div>
            <MainPageFooterSocialLinks/>
        </div>
    );
};

export {MainPageFooter};
