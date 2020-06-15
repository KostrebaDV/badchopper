import React from 'react';

import classes from './styles/index.module.scss';
import {Icon} from '@iconify/react';
import deleteCircleOutline from '@iconify/icons-mdi/delete-circle-outline';
import {Image} from '../../../../baseComponents/Image/Image';

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
            <Image
                width={200}
                height={200}
                src={media.path}
                alt={media.name}
                padding={4}
                boxShadow='0 0 10px rgba(0, 0, 0, 0.2)'
            />
        </div>
    );
};

export {DepartmentAddSelectedMedia};
