import CONST from './const';

export const deleteClientSyncHashModel = (client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .deleteMany({})
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const setClientSyncHashModel = (hash, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .insertOne({hash: hash})
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const getClientSyncHashModel = (client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .findOne({})
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

