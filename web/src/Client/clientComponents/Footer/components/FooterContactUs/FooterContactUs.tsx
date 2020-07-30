import React from 'react';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import {translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';

const FooterContactUs = (
    {
        handleContactUsFormOpen
    }
) => {
    return (
        <>
            <div
                onClick={handleContactUsFormOpen}
                className={classes.footerContactUs}
            >
                <Typography
                    variant="48"
                    lineHeight="1"
                    upperCase
                >
                    {translate(codes.doYouWantToBecomePart)}&nbsp;
                </Typography>
                <Typography
                    variant="48"
                    lineHeight="1"
                    upperCase
                    className={classes.footerContactUs__yesText}
                >
                    /{translate(codes.yes)}
                </Typography>
            </div>
        </>
    );
};

export {FooterContactUs};
