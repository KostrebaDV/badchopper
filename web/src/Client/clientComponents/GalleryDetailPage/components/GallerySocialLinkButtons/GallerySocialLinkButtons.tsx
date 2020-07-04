import React from 'react';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import {Link} from '../../../../../Admin/baseComponents/Link/Link';
import classes from './styles/index.module.scss';

const GallerySocialLinkButtons = () => {
    return (
        <div className={classes.gallerySocialLinkButtons}>
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
                className={classes.gallerySocialLinkButtons__rightButton}
            >
                <Link hasRoute={false} link="/">
                    Instagramm
                </Link>
            </Typography>
        </div>
    );
};

export {GallerySocialLinkButtons};
