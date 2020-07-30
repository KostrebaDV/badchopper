import React, {useContext, useEffect} from 'react';
import {ContentLayout} from '../../../../adminComponents/ContentLayout/ContentLayout';
import {GridLayout} from '../../../../baseComponents/GridLayout/GridLayout';
import {GridLayoutRow} from '../../../../baseComponents/GridLayout';
import {EmptyContent} from '../../../../baseComponents/EmptyContent/EmptyContent';
import {CommentsContext} from '../../store';
import {deleteComment, getAllComments} from '../../api';
import {CommentsListItem} from './CommentsListItem';
import {getUniqueId, getUniqueKey} from '../../../../../utils';
import classes from './styles/index.module.scss';
import {MODALS} from '../CommentsModalsProvider/const';
import {CommentsModalsContext} from '../CommentsModalsProvider/const';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';

const CommentsList = () => {
    const {comments, setComments, removeComment} = useContext(CommentsContext);
    const {openModal} = useContext(CommentsModalsContext);
    const {showNotification} = useContext(AdminAppContext);

    useEffect(() => {
        getAllComments()
            .then(({data}) => setComments(data));
    // eslint-disable-next-line
    }, []);

    const handleItemClick = (id) => {
        const selectedItem = comments.find((item) => id === item._id);

        if (!!openModal) {
            openModal(
                MODALS.COMMENT_MODAL,
                {
                    isEditMode: false,
                    isPreviewMode: true,
                    selectedItem
                }
            );
        }
    };

    const handleItemDelete = (id) => {
        return deleteComment(id)
            .then(() => {
                removeComment(id);

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: `Отзыв удален`
                    });
                }
            });
    };

    const handleOpenItemDeleteModal = (e, id) => {
        e.stopPropagation();

        const selectedItem = comments.find((item) => id === item._id);

        if (!!openModal && typeof selectedItem !== 'undefined') {
            openModal(
                MODALS.DELETE_COMMENT_MODAL,
                {
                    modalTitle: 'Удалить отзыв',
                    rightButtonLabel: 'Удалить',
                    handleSubmit: () => handleItemDelete(id),
                    content: `Вы уверены, что хотите удалить отзыв?`
                }
            );
        }
    };

    const handleOpenItemEditModal = (e, id) => {
        e.stopPropagation();

        const selectedItem = comments.find(item => id === item._id);

        if (!!openModal) {
            openModal(
                MODALS.COMMENT_MODAL,
                {
                    isEditMode: true,
                    selectedItem,
                    isPreviewMode: false,
                }
            );
        }
    };

    const hasStaff = comments.length !== 0;

    return (
        <ContentLayout>
            <GridLayout>
                {
                    hasStaff && (
                        <GridLayoutRow
                            alignItems="center"
                            gridColumn={24}
                            grid="3-5-9-_1-3-3"
                            className={classes.staffList}
                        >
                            <div></div>
                            <div>имя</div>
                            <div>описание</div>
                            <div>дата</div>
                        </GridLayoutRow>
                    )
                }
                {
                    hasStaff && comments.map(item => {
                        return (
                            <CommentsListItem
                                key={getUniqueKey()}
                                item={item}
                                handleItemClick={handleItemClick}
                                handleOpenItemDeleteModal={handleOpenItemDeleteModal}
                                handleOpenItemEditModal={handleOpenItemEditModal}
                            />
                        );
                    })
                }
                {
                    !hasStaff && (
                        <EmptyContent>
                            Добавьте отзыв
                        </EmptyContent>
                    )
                }
            </GridLayout>
        </ContentLayout>
    );
};

export {CommentsList};
