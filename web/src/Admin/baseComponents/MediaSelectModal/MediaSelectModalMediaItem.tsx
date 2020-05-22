import React from 'react';

import classes from './styles/index.module.scss';
import {Checkbox} from '../Checkbox/Checkbox';

const MediaSelectModalMediaItem = (
    {
        item,
        handleItemCheck
    }
) => {
    return (
        <div className={classes.mediaSelectModalMediaItem}>
            <div className={classes.mediaSelectModalMediaItem__checkboxWrapper}>
                <Checkbox
                    onFieldChange={(value, setCheckboxValue) => handleItemCheck(item._id, value, setCheckboxValue)}
                />
                <div className={classes.mediaSelectModalMediaItem__name}>
                    {item.name}
                </div>
            </div>
            <img src={`http://localhost:4040/${item.path}`} alt={item.name}/>
        </div>
    );
};

export {MediaSelectModalMediaItem};
