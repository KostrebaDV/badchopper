import React from 'react';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import {Button} from '../../../Button/Button';
import classes from './styles/index.module.scss';

const FooterContactUs = () => {
    return (
        <div className={classes.footerContactUs}>
            <Typography
                variant="18"
                lineHeight="1"
            >
                !!Хочешь стать частью нашей команды?
            </Typography>
            <Button
                className={classes.footerContactUs__button}
                labelUppercase
                label="!!свяжись с нами"
                onClick={() => {}}
                fontSize="12"
            />
        </div>
    );
};

export {FooterContactUs};
