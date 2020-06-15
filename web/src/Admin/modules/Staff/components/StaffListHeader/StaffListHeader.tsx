import React, { useContext } from 'react';
import ContentHeader, {ContentHeaderLeft, ContentHeaderRight} from '../../../../adminComponents/ContentHeader';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import {Button} from '../../../../baseComponents/Button/Button';
import {StaffModalsContext, MODALS} from '../StaffModalsProvider/const';

const StaffListHeader = (
    {
        headerLabel,
        isBarberLayout
    }
) => {
    const { openModal } = useContext(StaffModalsContext);

    const actionButtonHandler = () => {
        if (!!openModal) {
            openModal(
                MODALS.STAFF_MODAL,
                {
                    isBarberLayout,
                    isEditMode: false,
                    iPreviewMode: false,
                }
            );
        }
    };

    const addButtonLabel = isBarberLayout ? "!!Добавить мастера" : "!!Добавить менеджера";

    return (
        <ContentHeader>
            <ContentHeaderLeft>
                <Typography
                    variant="24"
                >
                    {headerLabel}
                </Typography>
            </ContentHeaderLeft>
            <ContentHeaderRight>
                <Button
                    type="primary"
                    transparent
                    label={addButtonLabel}
                    floatRight
                    actionHandler={actionButtonHandler}
                />
            </ContentHeaderRight>
        </ContentHeader>
    );
};

StaffListHeader.defaultProps = {
    isBarberLayout: false
};

export {StaffListHeader};
