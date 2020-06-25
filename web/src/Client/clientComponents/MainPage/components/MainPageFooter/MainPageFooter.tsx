import React from 'react';
import classes from './styles/index.module.scss';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import {Link} from '../../../../../Admin/baseComponents/Link/Link';
import scissorsSvgUrl from "../../../../../static/images/scissors.svg";

const MainPageFooter = () => {
    return (
        <div className={classes.mainPageFooter}>
            <div className={classes.mainPageFooter__leftSide}>
                <Typography
                    variant="32"
                    lineHeight="1"
                    className={classes.mainPageFooter__bookingText}
                >
                    !!Запишись онлайн прямо сейчас!
                </Typography>
                <img src={scissorsSvgUrl} alt="scissors"/>
            </div>
            <div className={classes.mainPageFooter__rightSide}>
                <Typography
                    upperCase
                    variant="14"
                >
                    <Link hasRoute={false} link="/">
                        Facebook
                    </Link>
                </Typography>
                <Typography
                    upperCase
                    variant="14"
                    className={classes.mainPageFooter__instagramLink}
                >
                    <Link hasRoute={false} link="/">
                        Instagramm
                    </Link>
                </Typography>
            </div>
        </div>
    );
};

export {MainPageFooter};
