import React from 'react';
import {Icon} from '@iconify/react';
import deleteCircleOutline from '@iconify/icons-mdi/delete-circle-outline';
import classes from './styles/index.module.scss';
import {Image} from '../Image/Image';

const MediaSelectorItem = (
    {
        item,
        width,
        height,
        showDeleteButton,
        handleDeleteProcessedImage
    }
) => {
    return (
        <div
            style={{width}}
            className={classes.mediaSelectorItem}
        >
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
                width={width}
                height={height}
                src={item.path}
                alt={item.name}
            />
        </div>
    );
};

MediaSelectorItem.defaultProps = {
    width: 150,
    height: 200,
};

export {MediaSelectorItem};
