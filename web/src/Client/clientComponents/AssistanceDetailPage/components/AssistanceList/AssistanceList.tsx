import React from 'react';
import {AssistanceListItem} from './AssistanceListItem';
import {getUniqueKey} from '../../../../../utils';
import classes from './styles/index.module.scss';

const AssistanceList = (
    {
        assistance
    }
) => {
    return (
        <div className={classes.assistanceList}>
            {
                assistance.map((item, index) => {
                    return (
                        <AssistanceListItem
                            key={getUniqueKey()}
                            item={item}
                            index={index + 1}
                        />
                    );
                })
            }
        </div>
    );
};

export {AssistanceList};
