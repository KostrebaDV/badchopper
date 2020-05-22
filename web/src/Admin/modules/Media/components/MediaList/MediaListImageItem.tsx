import React from 'react';

import classes from './styles/index.module.scss';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import {Icon} from '@iconify/react';
import deleteCircleOutline from '@iconify/icons-mdi/delete-circle-outline';
import {getFileName} from '../../../../../utils';


const MediaListImageItem = (
    {
        image,
        handleOpenDeleteImageModal
    }
) => {
    return (
        <div className={classes.mediaListImageItem}>
            <div onClick={() => handleOpenDeleteImageModal(image._id)}>
                <Icon
                    icon={deleteCircleOutline}
                    className={classes.mediaListImageItem__deleteIcon}
                />
            </div>
            <img src={`http://localhost:4040/${image.path}`} alt={image.name}/>
            <Typography variant='14'>
                {getFileName(image.name, '___')}
            </Typography>
        </div>
    );
};

export {MediaListImageItem};
