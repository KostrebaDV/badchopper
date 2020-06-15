import React from 'react';
import {Icon} from '@iconify/react';
import deleteCircleOutline from '@iconify/icons-mdi/delete-circle-outline';
import classes from './styles/index.module.scss';
import {Image} from '../Image/Image';

const MediaSelectorItem = (
    {
        item,
        showDeleteButton,
        handleDeleteProcessedImage
    }
) => {
    return (
        <div className={classes.mediaSelectorItem}>
            {
                showDeleteButton && (
                    <div onClick={() => handleDeleteProcessedImage(item._id)}>
                        <Icon
                            icon={deleteCircleOutline}
                            className={classes.mediaSelectorItem__deleteIcon}
                        />
                    </div>
                )
            }
            <Image
                width={150}
                height={200}
                src={item.path}
                alt={item.name}
            />
        </div>
    );
};

export {MediaSelectorItem};
