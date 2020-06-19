import { AssistanceDTOType } from "../../types/assistanceTypes";
import CONST from "./const";
import { documentIdType } from "../../types/general";
import { ObjectID } from "bson";

const addCommentModel = (departmentDTO: AssistanceDTOType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .insertOne(departmentDTO)
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

const updateCommentModel = (updateAssistanceDTO: AssistanceDTOType, client) => {
    const {
        id,
        name,
        description,
        price
    } = updateAssistanceDTO;

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
                        price
                    }
                },
                {returnOriginal: false}
            )
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

const deleteCommentModel = (deleteAssistanceDTO: documentIdType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .findOneAndDelete({_id: new ObjectID(deleteAssistanceDTO.id)})
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
