import React from 'react';
import classes from './styles/index.module.scss';
import {Typography} from '../../../../baseComponents/Typography/Typography';

const DepartmentAddFormAssistanceItem = (
    {
        item
    }
) => {
    return (
        <div className={classes.departmentAddFormAssistanceItem}>
            <Typography bold="600">
                {item.name}
            </Typography>
            <Typography variant="14">
                !!цена: {item.price}
            </Typography>
        </div>
    );
};

export {DepartmentAddFormAssistanceItem};
