import React, {FC} from 'react';
import Modal from '../../../../baseComponents/Modal';
import {EditStaffModalContent} from './EditStaffModalContent';
import {ModalType} from '../../../../../types';

const EditStaffModal: FC<ModalType> = (
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
                    <EditStaffModalContent
                        {...renderData}
                        modalData={modalData}
                    />
                );
            }}
        />
    );
};

export {EditStaffModal};
