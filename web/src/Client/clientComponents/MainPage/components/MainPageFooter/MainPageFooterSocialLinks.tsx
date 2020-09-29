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
