import React from 'react';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import {translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';

const FooterMobileContactUs = (
    {
        handleContactUsFormOpen
    }
) => {
    return (
        <div
            onClick={handleContactUsFormOpen}
            className={classes.footerMobileContactUs}
        >
            <Typography
                lineHeight="1"
                upperCase
            >
                {translate(codes.doYouWantToBecomePart)}&nbsp;
            </Typography>
            <Typography
                lineHeight="1"
                upperCase
                className={classes.footerMobileContactUs__yesText}
            >
                /{translate(codes.yes)}
            </Typography>
        </div>
    );
};

export {FooterMobileContactUs};
