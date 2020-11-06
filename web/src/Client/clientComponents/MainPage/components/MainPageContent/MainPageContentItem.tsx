import React, {useContext} from 'react';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {Image} from '../../../../../Admin/baseComponents/Image/Image';
import {Link} from '../../../../../Admin/baseComponents/Link/Link';
import {ROUTES} from '../../../../App/routes';
import {translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';
import {AppContext} from '../../../../App/store';

const MainPageContentItem = (
    {
        item
    }
) => {
    const {languageCode} = useContext(AppContext);
    const componentClassName = ClassNames(
        classes.mainPageContentItem,
        "link"
    );

    return (
            //@ts-ignore
            <Link link={`${ROUTES.DEPARTMENT_DETAIL}${item.publicId}`} className={componentClassName}>
                <Image
                    src={item.image.path}
                    alt={item.name}
                    className={classes.mainPageContentItem_image}
                />
                <Typography
                    bold='600'
                    className={classes.mainPageContentItem__label}
                >
                    {item.name}
                </Typography>
                <Typography
                    variant='18'
                    className={classes.mainPageContentItem__address}
                >
                    {translate(codes.str)}. {item.address.street[languageCode]}, {item.address.number}
                </Typography>
            </Link>
    );
};

export {MainPageContentItem};
