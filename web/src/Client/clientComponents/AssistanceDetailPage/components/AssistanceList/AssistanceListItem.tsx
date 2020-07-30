import React, {useContext} from 'react';
import classes from './styles/index.module.scss';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import {isMobile} from "react-device-detect";
import {Image} from '../../../../../Admin/baseComponents/Image/Image';
import {AppContext} from '../../../../App/store';

const AssistanceListItem = (
    {
        item,
        index,
        onItemClick
    }
) => {
    const {languageCode} = useContext(AppContext);
    return (
        <div
            onClick={() => onItemClick(item._id)}
            className={classes.assistanceListItem}
        >
            <div  className={classes.assistanceListItem__leftSide}>
                <div className={classes.assistanceListItem__nameWrapper}>
                    <Typography
                        displayBlock
                        className={classes.assistanceListItem__index}
                    >
                        0{index}
                    </Typography>
                    <Typography
                        className={classes.assistanceListItem__name}
                    >
                        {item.name[languageCode]}
                    </Typography>
                </div>
                <div className={classes.assistanceListItem__rightSide}>
                    <Typography
                        className={classes.assistanceListItem__price}
                    >
                        {item.price}
                    </Typography>
                </div>
            </div>
            <Typography
                displayBlock
                className={classes.assistanceListItem__description}
            >
                {item.description[languageCode]}
            </Typography>
            {
                !isMobile && (
                    <Image
                        className={classes.assistanceListItem__image}
                        height={313}
                        src={item.image.path}
                        alt={item.image.name}
                    />
                )
            }
        </div>

    );
};

export {AssistanceListItem};
