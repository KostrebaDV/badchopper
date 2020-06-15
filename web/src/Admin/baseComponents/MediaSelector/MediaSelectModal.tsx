import React, { FC } from 'react';

import Modal from '../Modal';
import {ModalComponentType} from '../Modal/types';
import {MediaSelectModalContent} from './MediaSelectModalContent';

const MediaSelectModal: FC<ModalComponentType> = (
    {
        isOpen,
        modalData,
        handleClose
    }
) => {
    return (
        <Modal
            extraHeight
            modalInModal
            size="ultraLarge"
            isOpen={isOpen}
            handleClose={handleClose}
            render={renderData => {
                return (
                    <MediaSelectModalContent
                        {...renderData}
                        modalData={modalData}
                        handleClose={handleClose}
                    />
                );
            }}
        />
    );
};

export { MediaSelectModal };
