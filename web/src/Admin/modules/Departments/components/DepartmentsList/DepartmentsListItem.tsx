import React from 'react';

import classes from './styles/index.module.scss';
import {Image} from '../../../../baseComponents/Image/Image';

const DepartmentsListItem = (
    {
        departmentItem
    }
) => {
    return (
        <div className={classes.departmentsListItem__inner}>
            <Image
                src={departmentItem.image.path}
                alt={departmentItem.name}
                height={150}
                width="100%"
            />
            {departmentItem.name}
        </div>
    );
};

export {DepartmentsListItem};
