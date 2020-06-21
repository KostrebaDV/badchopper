import React, {useContext, useEffect, useState} from 'react';
import {CommentModalAddForm} from './CommentModalAddForm';
import {CommentModalEditForm} from './CommentModalEditForm';
import {getAllImages} from '../../../Media/api';
import {ModalContent, ModalFooter, ModalHeader} from '../../../../baseComponents/Modal';
import {ButtonGroup} from '../../../../baseComponents/ButtonGroup/ButtonGroup';
import {Button} from '../../../../baseComponents/Button/Button';
import {
    addComment,
    updateComment as updateCommentAPI
} from '../../api';
import {getUniqueId} from '../../../../../utils';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';
import {CommentsContext} from '../../store';
import {FormContext} from '../../../../../store/FormContext';

const CommentModalContent = (
    {
        modalData,
        handleClose
    }
) => {
    const {isEditMode, selectedItem, isPreviewMode} = modalData;
    const [mediaData,  setMediaData] = useState([]);
    const {forms} = useContext(FormContext);
    const {showNotification} = useContext(AdminAppContext);
    const {setComment, updateComment} = useContext(CommentsContext);

    useEffect(() => {
        getAllImages()
            .then(({data}) => setMediaData(data))
        // eslint-disable-next-line
    }, []);

    const handleAddSComment = (value) => {
        addComment(value)
            .then(({data}) => {
                handleClose()
                setComment(data)

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: 'Отзыв добавлен'
                    })
                }
            })
    }

    const handleEditSComment = values => {
        const {image, ...rest} = values;

        updateCommentAPI({...rest, id: values._id})
            .then(({data}) => {
                updateComment([data]);
                handleClose();

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: `!! Карточка обновлена`
                    })
                }
            })
    }

    const mediaModalData = {
        modalTitle: "!!Медиа файлы",
        rightButtonLabel: "!!Выбрать",
        mediaData,
        singleSelect: true
    };

    const submitHandler = () => {
        return isEditMode
            ? () => forms.EDIT_COMMENT_FORM.submitForm()
            : () => forms.ADD_COMMENT_FORM.submitForm()
    };

    const leftButtons = (
        <Button
            actionHandler={handleClose}
            label="!!Закрыть"
            transparent
        />
    );

    const rightButtons = (
        <Button
            actionHandler={submitHandler()}
            label={isEditMode ? "Обновить" : "Добавить"}
            type="primary"
        />
    );

    const getModalLabel = () => {
        if (isEditMode || isPreviewMode) {
            return `${selectedItem.name} ${selectedItem.surname}`
        }

        return "!!Добавить отзыв";
    };

    return (
        <>
            <ModalHeader
                label={getModalLabel()}
                handleClose={handleClose}
            />
            <ModalContent>
                {
                    !isEditMode && !isPreviewMode && (
                        <CommentModalAddForm
                            mediaModalData={mediaModalData}
                            handleAddSComment={handleAddSComment}
                        />
                    )
                }
                {
                    (isEditMode || isPreviewMode) && (
                        <CommentModalEditForm
                            initialValues={selectedItem}
                            mediaModalData={mediaModalData}
                            handleEditSComment={handleEditSComment}
                            isPreviewMode={isPreviewMode}
                        />
                    )
                }
            </ModalContent>
            <ModalFooter>
                <ButtonGroup
                    leftButtons={leftButtons}
                    rightButtons={rightButtons}
                    showRightButtons={!isPreviewMode}
                />
            </ModalFooter>
        </>
    );
};

export {CommentModalContent};
