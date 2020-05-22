import React, { useContext } from 'react';
import ContentHeader, {ContentHeaderLeft, ContentHeaderRight} from '../../../../adminComponents/ContentHeader';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import {Button} from '../../../../baseComponents/Button/Button';
import {MediaModalsContext, MODALS} from '../MediaModalsProvider/const';

const MediaListHeader = () => {
    const { openModal } = useContext(MediaModalsContext);

    const actionButtonHandler = () => {
        if (!!openModal) {
            openModal(MODALS.ADD_MEDIA_MODAL);
        }
    };

    return (
        <ContentHeader>
            <ContentHeaderLeft>
                <Typography
                    variant="24"
                >
                    !!Медиа
                </Typography>
            </ContentHeaderLeft>
            <ContentHeaderRight>
                <Button
                    floatRight
                    type="primary"
                    transparent
                    label="!!Добавить свiтлину"
                    actionHandler={actionButtonHandler}
                />
            </ContentHeaderRight>
        </ContentHeader>
    );
};

export {MediaListHeader};
