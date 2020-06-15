export type ModalsProviderContextType = {
    openModal?: (modalName: string, modalData?: object) => void;
    closeModal?: (modalName: string, modalData?: object) => void;
}

export type ModalType = {
    isOpen: boolean;
    handleClose: () => void;
    modalData?: object;
}
