import React from 'react';

import {GridLayoutRow} from '../../../../baseComponents/GridLayout';
import deleteIcon from '@iconify/icons-mdi/delete';
import pencilIcon from '@iconify/icons-mdi/pencil';
import {Button} from '../../../../baseComponents/Button/Button';
import {ButtonGroupIconButtons} from '../../../../baseComponents/ButtonGroup/ButtonGroupIconButtons';
import classes from './styles/index.module.scss';
import {Image} from '../../../../baseComponents/Image/Image';
import {MarginBox} from '../../../../baseComponents/MarginBox/MarginBox';

const CommentsListItem = (
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
            grid="3-5-9-_1-3-3"
            onClick={() => handleItemClick(item._id)}
            className={classes.staffListItem}
        >
            <MarginBox lTiny>
                <Image
                    src={item.image.path}
                    alt={item.name}
                    width={100}
                    height={150}
                />
            </MarginBox>
            <div>{item.name} {item.surname}</div>
            <div className={classes.assistanceListItem__description}>{item.description}</div>
            <div>{item.creationDate}</div>
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

export {CommentsListItem};
