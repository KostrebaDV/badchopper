import React from 'react';
import closeIcon from '../../../../../static/images/closeIcon.svg';
import checkIcon from '../../../../../static/images/checkIcon.svg';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import {translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';

const ContactDetailPageFeedbackSuccessModal = (
    {
        isOpen,
        handleClose
    }
) => {
    const componentOverlayClassName = ClassNames(
        {
            [classes.contactDetailPageFeedbackSuccessModal__overlay_open]: isOpen,
            [classes.contactDetailPageFeedbackSuccessModal__overlay_close]: !isOpen
        },
        classes.contactDetailPageFeedbackSuccessModal__overlay
    );

    return (
        <div className={componentOverlayClassName}>
            <div className={classes.contactDetailPageFeedbackSuccessModal}>
                <img
                    onClick={handleClose}
                    className={classes.contactDetailPageFeedbackSuccessModal__closeButton}
                    src={closeIcon} alt="closeIcon"
                />
                <div>
                    <img
                        className={classes.contactDetailPageFeedbackSuccessModal__icon}
                        src={checkIcon} alt="checkIcon"
                    />
                    <Typography
                        className={classes.contactDetailPageFeedbackSuccessModal__label}
                        displayBlock
                    >
                        {translate(codes.feedbackSent)}
                    </Typography>
                    <Typography
                        className={classes.contactDetailPageFeedbackSuccessModal__text}
                    >
                        {translate(codes.feedbackImportant)}
                    </Typography>
                </div>
            </div>
        </div>

    );
};

export {ContactDetailPageFeedbackSuccessModal};
