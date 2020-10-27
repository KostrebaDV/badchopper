import React, {FC} from 'react';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {Typography} from '../../../Admin/baseComponents/Typography/Typography';

type FormButton = {
    label: string;
    onClick: (data) => void;
    className?: string;
    fontSize?: string;
    labelUppercase?: boolean;
    disable?: boolean;
}

const FormButton: FC<FormButton> = (
    {
        label,
        onClick,
        fontSize,
        className,
        disable,
        labelUppercase
    }
) => {
    const componentClassName = ClassNames(
        {
            [classes.formButton_disabled]: disable
        },
        classes.formButton,
        className
    );

    return (
        <div
            onClick={onClick}
            className={componentClassName}
        >
            <Typography
                variant={fontSize}
                upperCase={labelUppercase}
            >
                {label}
            </Typography>
        </div>
    );
};

export {FormButton};