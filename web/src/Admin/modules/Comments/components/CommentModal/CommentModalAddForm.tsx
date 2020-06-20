import React from 'react';
import Form from '../../../../baseComponents/Form';
import {FORMS} from '../../const';
import {CommentFormLayout} from './CommentFormLayout';

const CommentModalAddForm = (
    {
        handleAddSComment,
        mediaModalData
    }
) => {
    return (
        <Form
            onSubmit={handleAddSComment}
            name={FORMS.ADD_COMMENT_FORM}
        >
            <CommentFormLayout
                mediaModalData={mediaModalData}
            />
        </Form>
    );
};

export {CommentModalAddForm};
