import React, { FC } from 'react';

import Modal from '../../../../baseComponents/Modal';
import {ModalComponentType} from '../../../../baseComponents/Modal/types';
import {MediaAddImageModalContent} from './MediaAddImageModalContent';

const MediaAddImageModal: FC<ModalComponentType> = (
    {
        isOpen,
        modalData,
        handleClose
    }
) => {
    return (
        <Modal
            extraHeight
            size="large"
            isOpen={isOpen}
            handleClose={handleClose}
            render={renderData => {
                return (
                    <MediaAddImageModalContent
                        {...renderData}
                    />
                );
            }}
        />
    );
};

export { MediaAddImageModal };
