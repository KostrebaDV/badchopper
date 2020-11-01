import React, {FC} from 'react';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {Typography} from '../../../Admin/baseComponents/Typography/Typography';
import {LoadSpinnerInLine} from '../../../Admin/baseComponents/LoadSpinnerInLine/LoadSpinnerInLine';

type FormButton = {
    label: string;
    onClick?: () => void;
    className?: string;
    fontSize?: string;
    labelUppercase?: boolean;
    disable?: boolean;
    pending?: boolean;
}

const FormButton: FC<FormButton> = (
    {
        label,
        onClick,
        fontSize,
        className,
        disable,
        labelUppercase,
        pending
    }
) => {
    const componentClassName = ClassNames(
        {
            [classes.formButton_disabled]: disable
        },
        classes.formButton,
        className
    );

    const handleClick = () => {
        if (!disable) {
            onClick && onClick()
        }
    }

    return (
        <div
            onClick={handleClick}
            className={componentClassName}
        >
            <Typography
                variant={fontSize}
                upperCase={labelUppercase}
            >
                {
                    !pending && (
                        label
                    )
                }
                {
                    pending && (
                        <LoadSpinnerInLine/>
                    )
                }
            </Typography>
        </div>
    );
};

export {FormButton};
