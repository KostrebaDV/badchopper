import {GalleriesDTOType} from '../../types/gallery';
import {
    addGalleryModel,
    getGalleriesModel,
    getGalleryImagesModel,
    deleteGalleryModel,
    updateGalleryModel
} from '../../models/gallery/gallery';
import {getImageService} from '../media/media';
import {deleteDocumentResponseStatusType, documentIdType} from '../../types/general';

export const addGalleryService = (galleryDTO, client) => {
    return addGalleryModel(galleryDTO, client)
        .then(({ops}) => ops[0])
};

export const getGalleries = (client) => {
    return getGalleriesModel(client)
};

export const getGalleryImages = async (getGalleryImagesDTO, client) => {
    const galleryImages = await getGalleryImagesModel(getGalleryImagesDTO, client)
        .then((data: GalleriesDTOType) => data);

    return Promise.all(galleryImages.map(async (imageId) => {
        const image = await getImageService(imageId, client).then(image => image);

        return {
            image
        }
    }));
};

export  const updateGalleryService = (updateGalleryDTO, client) => {
    if (updateGalleryDTO.id.length !== 0) {
        return updateGalleryModel(updateGalleryDTO, client)
            .then(({value}) => value)
    } else {
        throw new Error('Comments id is required')
    }
};

export const deleteGalleryService = (deleteGalleryDTO: documentIdType, client) => {
    if (deleteGalleryDTO.id.length !== 0) {
        return deleteGalleryModel(deleteGalleryDTO, client)
            .then((status: deleteDocumentResponseStatusType) => {
                if (status.deletedCount !== 0) {
                    return 'Gallery was deleted successfully'
                }

                throw Error('Gallery was not deleted')
            })
            .catch(error => {
                throw Error(error)
            });
    } else {
        throw new Error('Gallery id is required')
    }
};
