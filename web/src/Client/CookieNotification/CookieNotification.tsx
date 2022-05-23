import React, {useState} from 'react';
import classes from './styles/index.module.scss';
import {Typography} from '../../Admin/baseComponents/Typography/Typography';
import {translate} from '../../utils';
import {codes} from '../../static/translations/codes';
import {Button} from '../clientComponents/Button/Button';
import closeIcon from '../../static/images/closeIcon.svg';
import Cookies from 'js-cookie';

const CookieNotification = () => {
    const [show, setShow] = useState(true);

    const handleConfirm = () => {
        Cookies.set('allowCookie', 'true');
        setShow(false);
    };

    return (
        <>
            {
                show && (
                    <div className={classes.cookieNotification}>
                        <Typography variant="20">
                            {translate(codes.cookieConfirmationText)}
                        </Typography>
                        <div className={classes.cookieNotification__right}>
                            <Button
                                className={classes.cookieNotification__button}
                                label={translate(codes.confirm)}
                                onClick={handleConfirm}
                            />
                            <img
                                className={classes.cookieNotification__closeIcon}
                                onClick={() => setShow(false)}
                                src={closeIcon} alt="closeIcon"
                            />
                        </div>
                    </div>
                )
            }
        </>
    );
};

export {CookieNotification};
