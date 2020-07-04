import CONST from './const';
import {GalleryDTOType} from '../../types/gallery';
import {documentIdType} from '../../types/general';
import {ObjectID} from 'bson';

export const addGalleryModel = (galleryDTO: GalleryDTOType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .insertOne(galleryDTO)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const updateGalleryModel = (updateCommentDTO: GalleryDTOType, client) => {
    const {
        id,
        name,
        systemName,
        imagesId,
    } = updateCommentDTO;

    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .findOneAndUpdate(
                {
                    _id: new ObjectID(id)
                },
                {
                    $set: {
                        name,
                        systemName,
                        imagesId
                    }
                },
                {returnOriginal: false}
            )
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const getGalleriesModel = (client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .find()
            .toArray()
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const getGalleryImagesModel = (getGalleryImagesDTO: GalleryDTOType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .findOne({systemName: getGalleryImagesDTO.id}, {})
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const deleteGalleryModel = (deleteGalleryDTO: documentIdType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .findOneAndDelete({_id: new ObjectID(deleteGalleryDTO.id)})
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};
