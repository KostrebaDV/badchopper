import CONSTS from "./consts";
import { mediaImageDTOType } from "../../types/mediaTypes";
import { documentIdType } from "../../types/general";
import { ObjectID } from "bson";

const addImageModel = (mediaImageDTO: mediaImageDTOType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONSTS.BASE_COLLECTION)
            .insertMany(mediaImageDTO)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

const deleteImageModel = (deleteImageDTO: documentIdType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONSTS.BASE_COLLECTION)
            .findOneAndDelete({_id: new ObjectID(deleteImageDTO.id)})
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export {
    addImageModel,
    deleteImageModel
};
