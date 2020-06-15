import React from 'react';
import {Link} from '../../../../baseComponents/Link/Link';
import classes from './styles/index.module.scss';

const StaffListItemSocial = (
    {
        facebook,
        instagram
    }
) => {
    return (
        <div className={classes.staffListItemSocial}>
            {
                facebook && (
                    <Link
                        hasRoute={false}
                        link={facebook}
                    >
                        !!Facebook
                    </Link>
                )
            }
            {
                instagram && (
                    <Link
                        hasRoute={false}
                        link={instagram}
                    >
                        !!Instagram
                    </Link>
                )
            }
        </div>
    );
};

export {StaffListItemSocial};
