import {deleteDocumentResponseStatusType, documentIdType} from "../../types/general";

const path = require('path');
import { mediaImageDTOType } from "../../types/mediaTypes";
import {
    addImageModel,
    deleteImageModel
} from "../../models/media/media";
import { saveFiles, deleteFile } from "../../utils/media";

const uploadImageService = (req, client) => {
    const pathToUpload = path.resolve('../static/images');

    if (!req.files.files || Object.keys(req.files.files).length === 0) {
        throw new Error('No files were uploaded')
    }

    return saveFiles(pathToUpload,  req.files.files)
        .then((mediaImageDTO: mediaImageDTOType) => {
            return addImageModel(mediaImageDTO, client)
                .catch(err => console.log(err));
        });
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
    uploadImageService,
    deleteImageService
}
