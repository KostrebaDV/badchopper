import React from 'react';

import classes from './styles/index.module.scss';
import {Icon} from '@iconify/react';
import deleteCircleOutline from '@iconify/icons-mdi/delete-circle-outline';

const DepartmentAddSelectedMedia = (
    {
        media,
        showDeleteButton,
        handleDeleteProcessedImage
    }
) => {
    return (
        <div className={classes.departmentAddSelectedMedia}>
            {
                showDeleteButton && (
                    <div onClick={handleDeleteProcessedImage}>
                        <Icon
                            icon={deleteCircleOutline}
                            className={classes.departmentAddSelectedMedia__deleteIcon}
                        />
                    </div>
                )
            }
            <img src={`http://localhost:4040/${media.path}`} alt={media.name}/>
        </div>
    );
};

export {DepartmentAddSelectedMedia};
