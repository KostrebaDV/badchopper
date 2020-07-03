import { AssistanceDTOType } from "../../types/assistanceTypes";
import CONST from "./const";
import { documentIdType } from "../../types/general";
import { ObjectID } from "bson";

const addAssistanceModel = (assistanceDTO: AssistanceDTOType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .insertOne(assistanceDTO)
            .then(res => {
                resolve([
                    {
                        creationDate: new ObjectID(res._id).getTimestamp(),
                        ...res.ops[0]
                    }
                ])
            })
            .catch(err => reject(err));
    });
};

const getAllAssistanceModel = (client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .find()
            .toArray()
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

const updateAssistanceModel = (updateAssistanceDTO: AssistanceDTOType, client) => {
    const {
        id,
        name,
        description,
        price,
        imageId
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
                        imageId,
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

const deleteAssistanceModel = (deleteAssistanceDTO: documentIdType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .findOneAndDelete({_id: new ObjectID(deleteAssistanceDTO.id)})
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export {
    addAssistanceModel,
    getAllAssistanceModel,
    deleteAssistanceModel,
    updateAssistanceModel
};
