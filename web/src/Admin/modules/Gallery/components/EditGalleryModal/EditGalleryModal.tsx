import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../baseComponents/Modal';
import {EditGalleryModalContent} from './EditGalleryModalContent';

const EditGalleryModal = (
    {
        isOpen,
        handleClose,
        modalData
    }
) => {
    return (
        <Modal
            extraHeight
            size="large"
            isOpen={isOpen}
            handleClose={handleClose}
            render={renderData =>  <EditGalleryModalContent modalData={modalData} {...renderData}/>}
        />
    );
};

EditGalleryModal.propTypes = {
    isOpen: PropTypes.bool,
    handleClose: PropTypes.func,
    modalData: PropTypes.object
};

export {EditGalleryModal};
