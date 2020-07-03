import React from 'react';

import classes from './styles/index.module.scss';
import {Checkbox} from '../Checkbox/Checkbox';
import { HOST } from '../../../const';

const MediaSelectModalMediaItem = (
    {
        item,
        isCheck,
        handleItemCheck
    }
) => {
    return (
        <div className={classes.mediaSelectModalMediaItem}>
            <div className={classes.mediaSelectModalMediaItem__checkboxWrapper}>
                <Checkbox
                    value={isCheck}
                    onFieldChange={(value, setCheckboxValue) => handleItemCheck(item._id, value, setCheckboxValue)}
                />
                <div className={classes.mediaSelectModalMediaItem__name}>
                    {item.name}
                </div>
            </div>
            <img src={`${HOST}${item.path}`} alt={item.name}/>
        </div>
    );
};

export {MediaSelectModalMediaItem};
