import React from 'react';

import classes from './styles/index.module.scss';
import {Typography} from '../Typography/Typography';

const PreviewFiled = (
    {
        value
    }
) => {
    return (
        <div className={classes.previewFiled}>
            <Typography>
                {value}
            </Typography>
        </div>
    );
};

export {PreviewFiled};
