import React from 'react';
import {Image} from '../../../../baseComponents/Image/Image';
import classes from './styles/index.module.scss';
import {Typography} from '../../../../baseComponents/Typography/Typography';

const DepartmentAddFormStaffItem = (
    {
        item
    }
) => {
    return (
        <div className={classes.departmentAddFormStaffItem}>
            <Image
                src={item.image.path}
                alt={item.name}
                width={100}
                height={150}
            />
            <div className={classes.departmentAddFormStaffItem__content}>
                <Typography bold="600">
                    {item.name} {item.surname}
                </Typography>
                <Typography variant="14">
                    {item.position === 1 ? '!Мастер' : '!Менеджер'}
                </Typography>
            </div>
        </div>
    );
};

export {DepartmentAddFormStaffItem};
