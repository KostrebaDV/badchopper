import React, {useContext} from 'react';
import classes from './styles/index.module.scss';
import {Image} from '../../../../../Admin/baseComponents/Image/Image';
import ClassNames from 'classnames';
import {AppContext} from '../../../../App/store';
import {isUndefined} from '../../../../../utils';
import closeIcon from '../../../../../static/images/closeIcon.svg';

const AssistanceListItemMobilePreview = (
    {
        item,
        open,
        closeItemModal
    }
) => {
    const {languageCode} = useContext(AppContext);

    const componentClassName = ClassNames(
        {
            [classes.assistanceListItemMobilePreview_open] : open
        },
        classes.assistanceListItemMobilePreview
    );

    const componentOverlayClassName = ClassNames(
        {
            [classes.assistanceListItemMobilePreview__overlay_open]: open,
            [classes.assistanceListItemMobilePreview__overlay_close]: !open
        },
        classes.assistanceListItemMobilePreview__overlay
    );

    return (
        <div className={componentOverlayClassName}>
            <div className={componentClassName}>
                <img
                    onClick={closeItemModal}
                    className={classes.assistanceListItemMobilePreview__closeButton}
                    src={closeIcon} alt="closeIcon"
                />
                {
                    !isUndefined(item.name) && (
                        <div className={classes.assistanceListItemMobilePreview__header}>
                            {item.name[languageCode]}
                        </div>
                    )
                }
                {
                    !isUndefined(item.image) && (
                        <Image
                            className={classes.assistanceListItemMobilePreview__image}
                            height={190}
                            width="100%"
                            src={item?.image?.path}
                            alt={item?.image?.name}
                        />
                    )
                }
                {
                    !isUndefined(item.description) && (
                        <div className={classes.assistanceListItemMobilePreview__text}>
                            {item.description[languageCode]}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export {AssistanceListItemMobilePreview};
