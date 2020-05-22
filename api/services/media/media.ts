import {deleteDocumentResponseStatusType, documentIdType} from "../../types/general";

import { mediaImageDTOType } from "../../types/mediaTypes";
import {
    addImageModel,
    deleteImageModel,
    getAllImagesModel,
    getImageModel
} from "../../models/media/media";
import { saveFiles, deleteFile } from "../../utils/media";

const uploadImageService = (req, client) => {
    const pathToSave = './public/images';
    const pathToFile = '/images';

    if (!req.files.files || Object.keys(req.files.files).length === 0) {
        throw new Error('No files were uploaded')
    }

    return saveFiles(pathToSave, pathToFile,  req.files.files)
        .then((mediaImageDTO: mediaImageDTOType) => {
            return addImageModel(mediaImageDTO, client)
                .catch(err => console.log(err));
        });
};

const getAllImagesService = (client) => {
    return getAllImagesModel(client);
};

const getImageService = (id, client) => {
    return getImageModel(id, client);
};

const deleteImageService = (deleteImageDTO: documentIdType, client) => {
    if (deleteImageDTO.id.length !== 0) {
        return deleteImageModel(deleteImageDTO, client)
            .then((status: deleteDocumentResponseStatusType) => {
                if (status.value) {
                    return deleteFile(status.value.path)
                        .then(() => {
                            return 'Image was deleted successfully';
                        })
                        .catch(() => {
                            throw Error('Image was not deleted physically')
                        })
                }

                throw Error('Image was not deleted')
            })
            .catch(error => {
                throw Error(error)
            });
    } else {
        throw new Error('Image id is required')
    }
};

export {
    getAllImagesService,
    uploadImageService,
    deleteImageService,
    getImageService
}
