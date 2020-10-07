import React from 'react';
import {Image} from '../../../../../Admin/baseComponents/Image/Image';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {Link} from '../../../../../Admin/baseComponents/Link/Link';
import instaIcon from "../../../../../static/images/insta_icon.png";
import {translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';

const DetailPageStaffListItem = (
    {
        item
    }
) => {
    const componentClassName = ClassNames(
        classes.detailPageStaffListItem
    );

    return (
        <div className={componentClassName}>
            <Image
                width='100%'
                height={485}
                src={item.image.path}
                alt={`${item.name} ${item.surname}`}
                className={classes.detailPageStaffListItem__image}
            />
            <Link
                hasRoute={false}
                target="_blank"
                link={item.instagramUrl}
            >
                <Typography
                    variant='20'
                    upperCase
                    bold='600'
                    displayBlock
                    className={classes.detailPageStaffListItem__name}
                >
                    {item.name} {item.surname}
                    {
                        item.instagramUrl && (
                            <img
                                className={classes.detailPageStaffListItem__instaIcon}
                                src={instaIcon}
                                alt="instaIcon"
                            />
                        )
                    }
                </Typography>
            </Link>
            <Typography
                className={classes.detailPageStaffListItem__description}
                displayBlock
            >
                {item.description}
            </Typography>
            {
                item.yClientsUrl && (
                    <Link
                        hasRoute={false}
                        target="_blank"
                        link={item.yClientsUrl}
                        className={classes.detailPageStaffListItem__signInButton}
                    >
                        {translate(codes.bookNow)}
                    </Link>
                )
            }
        </div>
    );
};

export {DetailPageStaffListItem};
