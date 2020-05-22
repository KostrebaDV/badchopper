import React from 'react';

import classes from './styles/index.module.scss';

const DepartmentsListItem = (
    {
        departmentItem
    }
) => {
    return (
        <div className={classes.departmentsListItem__inner}>
            <img src={`http://localhost:4040/${departmentItem.image.path}`} alt={departmentItem.name}/>
            {departmentItem.name}
        </div>
    );
};

export {DepartmentsListItem};
