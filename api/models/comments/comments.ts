import { CommentDTOItemType } from "../../types/commentsTypes";
import CONST from "./const";
import { documentIdType } from "../../types/general";
import { ObjectID } from "bson";

const addCommentModel = (commentDTO: CommentDTOItemType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .insertOne(commentDTO)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

const getAllCommentsModel = (client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .find()
            .toArray()
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

const updateCommentModel = (updateCommentDTO: CommentDTOItemType, client) => {
    const {
        id,
        name,
        description,
        imageId,
        surname,
        instagramUrl
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
                        description,
                        imageId,
                        surname,
                        instagramUrl
                    }
                },
                {returnOriginal: false}
            )
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

const deleteCommentModel = (deleteCommentDTO: documentIdType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .findOneAndDelete({_id: new ObjectID(deleteCommentDTO.id)})
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export {
    addCommentModel,
    getAllCommentsModel,
    deleteCommentModel,
    updateCommentModel
};
