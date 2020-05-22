import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../baseComponents/Modal';
import {AssistanceDetailModalContent} from './AssistanceDetailModalContent';

const AssistanceDetailModal = (
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
                    <AssistanceDetailModalContent
                        {...renderData}
                        modalData={modalData}
                    />
                );
            }}
        />
    );
};

AssistanceDetailModal.propTypes = {
    isOpen: PropTypes.bool,
    handleClose: PropTypes.func,
    modalData: PropTypes.object
};

export {AssistanceDetailModal};
