import React from 'react';
import classes from './styles/index.module.scss';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import {Link} from '../../../../../Admin/baseComponents/Link/Link';
import ClassNames from 'classnames';

const MainPageFooterSocialLinks = (
    {
        noMargin
    }
) => {
    const componentClassName = ClassNames(
        {
            [classes.mainPageFooter__rightSide]: !noMargin
        }
    );

    return (
        <div className={componentClassName}>
            <Typography
                upperCase
                variant="14"
                className={classes.mainPageFooter__facebookLink}
            >
                <Link hasRoute={false} link="https://www.facebook.com/badchopper.cv">
                    Facebook
                </Link>
            </Typography>
            <Typography
                upperCase
                variant="14"
                className={classes.mainPageFooter__instagramLink}
            >
                <Link hasRoute={false} link="https://www.instagram.com/bad_chopper/">
                    Instagramm
                </Link>
            </Typography>
        </div>
    );
};

MainPageFooterSocialLinks.defaultProps = {
    noMargin: false
};

export {MainPageFooterSocialLinks};