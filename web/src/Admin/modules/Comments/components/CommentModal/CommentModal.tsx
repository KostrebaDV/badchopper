import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../baseComponents/Modal';
import {CommentModalContent} from './CommentModalContent';

const CommentModal = (
    {
        isOpen,
        modalData,
        handleClose
    }
) => {
    return (
        <Modal
            isOpen={isOpen}
            handleClose={handleClose}
            render={renderData => {
            	return (
            		<CommentModalContent
            			{...renderData}
            			modalData={modalData}
            		/>
            	);
            }}
        />
    );
};

CommentModal.propTypes = {
    isOpen: PropTypes.bool,
    handleClose: PropTypes.func,
    modalData: PropTypes.object
};

export {CommentModal};
