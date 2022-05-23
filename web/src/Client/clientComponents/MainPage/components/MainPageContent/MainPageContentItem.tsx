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
import logo from "../../../../../static/images/badchopperLogoFilled.svg";

const MainPageContentItem = (
    {
        item,
        index
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
                    src={item.effectImage.path}
                    alt={item.name}
                    className={classes.mainPageContentItem_image}
                />
                <div>
                    <img src={logo} alt="badchopperLogo"/>
                    <Typography
                        bold='600'
                        className={classes.mainPageContentItem__label}
                    >
                        {` / 0${index}`}
                    </Typography>
                </div>

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
