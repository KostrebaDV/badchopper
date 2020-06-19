import React, { useContext } from 'react';
import ContentHeader, {ContentHeaderLeft, ContentHeaderRight} from '../../../../adminComponents/ContentHeader';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import {Button} from '../../../../baseComponents/Button/Button';
import {CommentsModalsContext, MODALS} from "../CommentsModalsProvider/const";

const CommentsHeader = () => {
    const { openModal } = useContext(CommentsModalsContext);

    const actionButtonHandler = () => {
        if (!!openModal) {
            openModal(MODALS.COMMENT_MODAL);
        }
    };

    return (
        <ContentHeader>
            <ContentHeaderLeft>
                <Typography
                    variant="24"
                >
                    !!Услуги
                </Typography>
            </ContentHeaderLeft>
            <ContentHeaderRight>
                <Button
                    type="primary"
                    transparent
                    label="!!Добавить комментрий"
                    floatRight
                    actionHandler={actionButtonHandler}
                />
            </ContentHeaderRight>
        </ContentHeader>
    );
};

export {CommentsHeader};
