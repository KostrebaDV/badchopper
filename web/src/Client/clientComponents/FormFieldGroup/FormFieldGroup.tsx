import React from 'react';
import classes from './styles/index.module.scss';

const FormFieldGroup = (
    {
        children
    }
) => {
    return (
        <div className={classes.formFieldGroup}>{children}</div>
    );
};

export {FormFieldGroup};
