import React, {useContext} from 'react';
import {ModalContent, ModalFooter, ModalHeader} from '../../../../baseComponents/Modal';
import {ButtonGroup} from '../../../../baseComponents/ButtonGroup/ButtonGroup';
import {Button} from '../../../../baseComponents/Button/Button';
import {GeneralUploader} from '../../../../baseComponents/Uploader/components/GeneralUploader/GeneralUploader';
import {ENDPOINT, MEDIA_IMAGE_UPLOADER} from '../const';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';
import {getAllImages} from '../../api';
import {MediaContext} from '../../store';

const MediaAddImageModalContent = (
    {
        extraHeight,
        handleClose: handleCloseFromProps
    }
) => {
    const { upLoaders } = useContext(AdminAppContext);
    const { setAllImages } = useContext(MediaContext);
    const { removeUploaderFromGlobalContext } = useContext(AdminAppContext);

    const handleUpload = () => {
        upLoaders.MEDIA_IMAGE_UPLOADER.upload()
            .then(() => {
                handleClose();
                return getAllImages();
            })
            .then(({ data }) => setAllImages(data))
            .catch(e => console.log(e))
    };

    const handleClose = () => {
        handleCloseFromProps();
        removeUploaderFromGlobalContext(MEDIA_IMAGE_UPLOADER)
    };

    const leftButtons = (
        <Button
            actionHandler={handleClose}
            label="!!Закрыть"
            transparent
        />
    );

    const rightButtons = (
        <Button
            actionHandler={handleUpload}
            label="!!Загрузить"
            type="primary"
        />
    );

    return (
        <>
            <ModalHeader
                label="!!Добавить изображения"
                handleClose={handleClose}
            />
            <ModalContent
                extraHeight={extraHeight}
            >
                <GeneralUploader
                    unMount={false}
                    url={ENDPOINT.MEDIA_IMAGE_UPLOAD_URL}
                    name={MEDIA_IMAGE_UPLOADER}
                />
            </ModalContent>
            <ModalFooter>
                <ButtonGroup
                    leftButtons={leftButtons}
                    rightButtons={rightButtons}
                />
            </ModalFooter>
        </>
    );
};

export {MediaAddImageModalContent};
