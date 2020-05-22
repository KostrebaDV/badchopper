import React, {useContext} from 'react';
import {isNullOrUndefined} from '../../../../../utils';
import {DepartmentsModalsContext, MODALS} from '../DepartmentsModalsProvider/const';
import {DepartmentAddSelectedMedia} from './DepartmentAddSelectedMedia';
import {DepartmentAddMediaButton} from './DepartmentAddMediaButton';

const DepartmentAddMedia = (
    {
        mediaData,
        singleSelect,
        selectedMedia,
        hasSelectedMedia,
        handleSelectMedia,
        handleDeleteProcessedImage,
        showDeleteButton
    }
) => {
    const {openModal} = useContext(DepartmentsModalsContext);

    const handleOpenMediaModal = () => {
        if (typeof openModal === 'undefined') return;

        openModal(
            MODALS.MEDIA_SELECT_MODAL,
            {
                modalTitle: '!!Выберите одно изображение',
                rightButtonLabel: '!!Выбрать',
                handleSubmit: handleSelectMedia,
                mediaData,
                singleSelect: true
            }
        )
    };

    const showButton =  isNullOrUndefined(selectedMedia[0]) || !singleSelect;

    return (
        <>
            {
                !isNullOrUndefined(selectedMedia[0]) && (
                    selectedMedia.map(media => {
                        return (
                            <DepartmentAddSelectedMedia
                                media={media}
                                key={media._id}
                                showDeleteButton={showDeleteButton}
                                handleDeleteProcessedImage={handleDeleteProcessedImage}
                            />
                        );
                    })
                )
            }
            {
                showButton && (
                    <DepartmentAddMediaButton
                        handleClick={handleOpenMediaModal}
                        hasSelectedMedia={hasSelectedMedia}
                    />
                )
            }
        </>
    );
};

DepartmentAddMedia.defaultProps = {
    singleSelect: false
};

export {DepartmentAddMedia};
