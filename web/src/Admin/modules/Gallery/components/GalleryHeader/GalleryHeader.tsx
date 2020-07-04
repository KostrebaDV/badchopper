import React, { useContext } from 'react';
import ContentHeader, {ContentHeaderLeft, ContentHeaderRight} from '../../../../adminComponents/ContentHeader';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import {Button} from '../../../../baseComponents/Button/Button';
import {GalleryModalsContext, MODALS} from '../GalleryModalsProvider/const';
import {GalleryContext} from '../../store';

const GalleryHeader = () => {
    const {galleries} = useContext(GalleryContext);
    const { openModal } = useContext(GalleryModalsContext);

    const actionButtonHandler = () => {
        if (!!openModal) {
            openModal(MODALS.ADD_GALLERY_MODAL);
        }
    };

    return (
        <ContentHeader>
            <ContentHeaderLeft>
                <Typography
                    variant="24"
                >
                    !!Галлереи
                </Typography>
            </ContentHeaderLeft>
            {
                galleries.length < 2 && (
                    <ContentHeaderRight>
                        <Button
                            floatRight
                            type="primary"
                            transparent
                            label="!!Добавить галлерею"
                            actionHandler={actionButtonHandler}
                        />
                    </ContentHeaderRight>
                )
            }
        </ContentHeader>
    );
};

export {GalleryHeader};
