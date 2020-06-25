import React, {FC} from 'react';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {Typography} from '../../../Admin/baseComponents/Typography/Typography';

type ButtonType = {
    label: string;
    onClick: (data) => void;
    className?: string;
    fontSize?: string;
    labelUppercase?: boolean;
}

const Button: FC<ButtonType> = (
    {
        label,
        onClick,
        fontSize,
        className,
        labelUppercase
    }
) => {
    const componentClassName = ClassNames(
        classes.button,
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

export {Button};
