import React from 'react';

import classes from './styles/index.module.scss';
import {GridLayoutRow} from '../../../../baseComponents/GridLayout';
import deleteIcon from '@iconify/icons-mdi/delete';
import pencilIcon from '@iconify/icons-mdi/pencil';
import {Button} from '../../../../baseComponents/Button/Button';
import {ButtonGroupIconButtons} from '../../../../baseComponents/ButtonGroup/ButtonGroupIconButtons';
import {Typography} from '../../../../baseComponents/Typography/Typography';

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
            gridColumn={24}
            grid="8-9-2-2-3"
            onClick={() => handleItemClick(item._id)}
            className={classes.assistanceListItem}
        >
            <div>{item.name.ru}</div>
            <div className={classes.assistanceListItem__description}>{item.description.ru}</div>
            <Typography bold="500">{item.price}</Typography>
            <Typography bold="500">грн.</Typography>
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
