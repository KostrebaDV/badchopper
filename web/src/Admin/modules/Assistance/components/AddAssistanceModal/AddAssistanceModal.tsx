import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../baseComponents/Modal';
import {AddAssistanceModalContent} from './AddAssistanceModalContent';

const AddAssistanceModal = (
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
            		<AddAssistanceModalContent
            			{...renderData}
            			modalData={modalData}
            		/>
            	);
            }}
        />
    );
};

AddAssistanceModal.propTypes = {
    isOpen: PropTypes.bool,
    handleClose: PropTypes.func,
    modalData: PropTypes.object
};

export {AddAssistanceModal};
