import CONST from "./const";
import { StaffItemDTOType } from "../../types/staff";
import {ObjectID} from 'bson';
import {documentIdType} from '../../types/general';

export const addStaffModel = (staffDTO: StaffItemDTOType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .insertOne(staffDTO)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const getAllStaffModel = (client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .find()
            .toArray()
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const getStaffByIdModel = (client, ids) => {
    const obj_ids = ids.map(id => new ObjectID(id));

    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .find({
                _id: {
                        $in: obj_ids
                    }
                })
            .toArray()
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const getAllManagerStaffModel = (client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .find({position: 2})
            .toArray()
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const getAllBarberStaffModel = (client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .find({position: 1})
            .toArray()
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const updateStaffModel = (updateStaffDTO: StaffItemDTOType, client) => {
    const {
        id,
        name,
        position,
        imageId,
        instagramUrl,
        facebookUrl,
        description,
        patronymic,
        surname,
        yClientsUrl
    } = updateStaffDTO;

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
                        position,
                        facebookUrl,
                        instagramUrl,
                        description,
                        patronymic,
                        surname,
                        yClientsUrl
                    }
                },
                {returnOriginal: false}
            )
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const deleteStaffModel = (deleteAssistanceDTO: documentIdType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .findOneAndDelete({_id: new ObjectID(deleteAssistanceDTO.id)})
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};
