import React from 'react';
import {Typography} from '../Typography/Typography';
import classes from './styles/index.module.scss';

const FormLayoutPreviewItem = (
    {
        label,
        value
    }
) => {
    return (
        <div className={classes.formLayoutPreviewItem}>
            <div>{label}</div>
            <Typography variant="14">{value}</Typography>
        </div>
    );
};

export {FormLayoutPreviewItem};
