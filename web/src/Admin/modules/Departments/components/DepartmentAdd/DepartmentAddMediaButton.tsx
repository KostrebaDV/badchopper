import React from 'react';
import { Icon } from '@iconify/react';
import plusIcon from '@iconify/icons-mdi/plus';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';

const DepartmentAddMediaButton = (
    {
        handleClick,
        hasSelectedMedia
    }
) => {
    const componentClassName = ClassNames(
        {
            [classes.departmentAddMediaButton__noSelectedMedia]: !hasSelectedMedia
        },
        classes.departmentAddMediaButton
    );

    return (
        <div
            onClick={handleClick}
            className={componentClassName}
        >
            <Icon
                icon={plusIcon}
            />
        </div>
    );
};

export {DepartmentAddMediaButton};
