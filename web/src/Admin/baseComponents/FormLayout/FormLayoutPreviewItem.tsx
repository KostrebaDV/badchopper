import React from 'react';
import {Typography} from '../Typography/Typography';

const FormLayoutPreviewItem = (
    {
        label,
        value
    }
) => {
    return (
        <div>
            <div>{label}</div>
            <Typography variant="14">{value}</Typography>
        </div>
    );
};

export {FormLayoutPreviewItem};
