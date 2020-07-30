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
                    bold="600"
                    variant="24"
                >
                    Отзывы
                </Typography>
            </ContentHeaderLeft>
            <ContentHeaderRight>
                <Button
                    type="primary"
                    transparent
                    label="Добавить отзыв"
                    floatRight
                    actionHandler={actionButtonHandler}
                />
            </ContentHeaderRight>
        </ContentHeader>
    );
};

export {CommentsHeader};
