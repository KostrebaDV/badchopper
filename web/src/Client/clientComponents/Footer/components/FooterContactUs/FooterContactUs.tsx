import React from 'react';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import { useHistory } from "react-router-dom";

const FooterContactUs = () => {
    const history = useHistory();

    const handleContactUsClick = () => {
        history.push("/contacts");
    };

    return (
        <div
            onClick={handleContactUsClick}
            className={classes.footerContactUs}
        >
            <Typography
                variant="48"
                lineHeight="1"
                upperCase
            >
                !!Хочешь стать частью нашей команды?&nbsp;
            </Typography>
            <Typography
                variant="48"
                lineHeight="1"
                upperCase
                className={classes.footerContactUs__yesText}
            >
                /да
            </Typography>
        </div>
    );
};

export {FooterContactUs};
