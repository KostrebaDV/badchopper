import React, { useEffect, useContext } from 'react';
import {ContentLayout} from '../../../../adminComponents/ContentLayout/ContentLayout';
import {deleteImage, getAllImages as getAllImagesAPI} from '../../api';
import {MediaContext} from '../../store';
import {MediaListImageItem} from './MediaListImageItem';
import {getUniqueKey} from '../../../../../utils';

import classes from './styles/index.module.scss';
import {MediaModalsContext, MODALS} from '../MediaModalsProvider/const';
import {EmptyContent} from '../../../../baseComponents/EmptyContent/EmptyContent';

const MediaListContent = () => {
    const { images, setAllImages } = useContext(MediaContext);
    const { openModal } = useContext(MediaModalsContext);

    const hasImages = images.length !== 0;

    useEffect(() =>{
        getAllImages()
        // eslint-disable-next-line
    }, []);

    const getAllImages = () => {
        getAllImagesAPI()
            .then(({ data }) => setAllImages(data))
    };

    const handleDeleteImage = (id) => {
        return deleteImage(id)
            .then(() => {
                getAllImages();
            })
    };

    const handleOpenDeleteImageModal = (id) => {
        if ( typeof openModal === 'undefined') return;

        openModal(
            MODALS.DELETE_MEDIA_MODAL,
            {
                modalTitle: '!!Удалить изображение',
                rightButtonLabel: '!!Удалить',
                handleSubmit: () => handleDeleteImage(id),
                content: '!!Вы уверены, что хотите удалить изображение?'
            }
        );
    };

    return (
        <ContentLayout>
            <div className={classes.mediaListContent}>
                {
                    hasImages && images.map(image => {
                        return (
                            <MediaListImageItem
                                key={getUniqueKey()}
                                image={image}
                                handleOpenDeleteImageModal={handleOpenDeleteImageModal}
                            />
                        )
                    })
                }
                {
                    !hasImages && (
                        <EmptyContent>
                            !!Добавьте изображение
                        </EmptyContent>
                    )
                }
            </div>
        </ContentLayout>
    );
};

export {MediaListContent};
