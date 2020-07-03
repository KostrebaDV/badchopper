import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../baseComponents/Modal';
import {AddGalleryModalContent} from './AddGalleryModalContent';

const AddGalleryModal = (
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
            render={renderData =>  <AddGalleryModalContent modalData={modalData} {...renderData}/>}
        />
    );
};

AddGalleryModal.propTypes = {
    isOpen: PropTypes.bool,
    handleClose: PropTypes.func,
    modalData: PropTypes.object
};

export {AddGalleryModal};
