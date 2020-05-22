import React from 'react';

import classes from './styles/index.module.scss';
import {GridLayoutRow} from '../../../../baseComponents/GridLayout';
import deleteIcon from '@iconify/icons-mdi/delete';
import pencilIcon from '@iconify/icons-mdi/pencil';
import {Button} from '../../../../baseComponents/Button/Button';
import {ButtonGroupIconButtons} from '../../../../baseComponents/ButtonGroup/ButtonGroupIconButtons';

const AssistanceListItem = (
    {
        item,
        handleItemClick,
        handleOpenItemDeleteModal,
        handleOpenItemEditModal,
    }
) => {
    return (
            <GridLayoutRow
                alignItems="center"
                grid="4-5-2-1"
                onClick={() => handleItemClick(item._id)}
                className={classes.assistanceListItem}
            >
                <div>{item.name}</div>
                <div className={classes.assistanceListItem__description}>{item.description}</div>
                <div>{item.price}</div>
                    <ButtonGroupIconButtons>
                        <Button
                            type="danger"
                            transparent
                            noBorder
                            icon={deleteIcon}
                            actionHandler={e => handleOpenItemDeleteModal(e, item._id)}
                        />
                        <Button
                            type="info"
                            transparent
                            noBorder
                            icon={pencilIcon}
                            actionHandler={e => handleOpenItemEditModal(e, item._id)}
                        />
                    </ButtonGroupIconButtons>
            </GridLayoutRow>
    );
};

export {AssistanceListItem};
