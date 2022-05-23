import React from 'react';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import {Link} from '../../../../../Admin/baseComponents/Link/Link';

const MainPageFooterSocialLinks = () => {
    return (
        <Typography
            upperCase
            variant="14"
        >
            <Link hasRoute={false} link="https://www.instagram.com/bad_chopper/">
                Instagram
            </Link>
        </Typography>
    );
};

MainPageFooterSocialLinks.defaultProps = {
    noMargin: false
};

export {MainPageFooterSocialLinks};
