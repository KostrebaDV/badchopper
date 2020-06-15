import React, {FC} from 'react';
import Modal from '../../../../baseComponents/Modal';
import {StaffModalModalContent} from './StaffModalModalContent';
import {ModalType} from '../../../../../types';

const StaffModal: FC<ModalType> = (
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
                    <StaffModalModalContent
                        {...renderData}
                        modalData={modalData}
                    />
                );
            }}
        />
    );
};

export {StaffModal};
