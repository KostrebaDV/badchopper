import React from 'react';
import Form from '../../../../baseComponents/Form';
import {FORMS} from '../../const';
import {CommentFormLayout} from './CommentFormLayout';

const CommentModalEditForm = (
    {
        handleEditSComment,
        mediaModalData,
        initialValues,
        isPreviewMode
    }
) => {
    return (
        <Form
            initialValues={initialValues}
            onSubmit={handleEditSComment}
            name={FORMS.EDIT_COMMENT_FORM}
        >
            <CommentFormLayout
                isPreviewMode={isPreviewMode}
                mediaModalData={mediaModalData}
                mediaId={[initialValues.image._id]}
            />
        </Form>
    );
};

export {CommentModalEditForm};
