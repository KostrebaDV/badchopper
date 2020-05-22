import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../baseComponents/Modal';
import {EditAssistanceModalContent} from './EditAssistanceModalContent';

const EditAssistanceModal = (
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
            		<EditAssistanceModalContent
            			{...renderData}
            			modalData={modalData}
            		/>
            	);
            }}
        />
    );
};

EditAssistanceModal.propTypes = {
    isOpen: PropTypes.bool,
    handleClose: PropTypes.func,
    modalData: PropTypes.object
};

export {EditAssistanceModal};
