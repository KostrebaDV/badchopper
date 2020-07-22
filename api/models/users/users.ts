import {UserItemDTOType} from '../../types/users';
import CONST from './const';

export const addUserModel = (staffDTO: UserItemDTOType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .insertOne(staffDTO)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const getUserModel = (login, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .findOne({login}, {})
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};
