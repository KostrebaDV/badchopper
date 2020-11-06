import React from 'react';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import scissorsSvgUrl from "../../../../../static/images/scissors.svg";
import bookingRoundText from "../../../../../static/images/bookingRoundText.svg";
import {MainPageFooterSocialLinks} from './MainPageFooterSocialLinks';
import {codes} from '../../../../../static/translations/codes';
import {translate} from '../../../../../utils';
import {Link} from '../../../../../Admin/baseComponents/Link/Link';
import {yClientsUrl} from '../../../../../const';
import classes from './styles/index.module.scss';
import {LanguageBar} from '../../../LanguageBar/LanguageBar';
import {isMobile} from "react-device-detect";

const MainPageFooter = () => {
    return (
        <div className={classes.mainPageFooter}>
            <div className={classes.mainPageFooter__leftSide}>
                <Typography
                    variant="32"
                    lineHeight="1"
                    className={classes.mainPageFooter__bookingText}
                >
                    <Link
                        target="_blank"
                        hasRoute={false}
                        link={yClientsUrl}
                    >
                        {translate(codes.bookUpOnlineRightNow)}
                    </Link>
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
            <div className={classes.mainPageFooter__rightSide}>
                <div className={classes.mainPageFooter__rightSideSocialLinks}>
                    <MainPageFooterSocialLinks/>
                </div>
                {
                    !isMobile && (
                        <LanguageBar/>
                    )
                }
            </div>
        </div>
    );
};

export {MainPageFooter};
