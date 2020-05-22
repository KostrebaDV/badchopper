import React, { useContext } from 'react';
import ContentHeader, {ContentHeaderLeft, ContentHeaderRight} from '../../../../adminComponents/ContentHeader';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import {Button} from '../../../../baseComponents/Button/Button';
import {AssistanceModalsContext, MODALS} from '../AssistanceModalsProvider/const';

const AssistanceHeader = () => {
    const { openModal } = useContext(AssistanceModalsContext);

    const actionButtonHandler = () => {
        if (!!openModal) {
            openModal(MODALS.ADD_ASSISTANCE_MODAL);
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
                    label="!!Добавить услугу"
                    floatRight
                    actionHandler={actionButtonHandler}
                />
            </ContentHeaderRight>
        </ContentHeader>
    );
};

export {AssistanceHeader};
