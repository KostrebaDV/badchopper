import React from 'react';

export type ModalComponentType = {
    isOpen: boolean;
    modalData?: object;
    handleClose: () => void;
}

export type ModelContentType = {
    children: React.ReactNode;
    isPending?: boolean;
    className?: string;
    autoHeight?: boolean;
    extraHeight?: boolean;
}
