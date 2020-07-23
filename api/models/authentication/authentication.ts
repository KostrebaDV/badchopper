import CONST from './const';

export const addTokenModel = (tokenDTO, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .insertOne(tokenDTO)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const deleteTokenModel = (tokenDTO, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .findOneAndDelete({refreshToken: tokenDTO.refreshToken})
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const getTokenModel = (tokenDTO, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .findOne({refreshToken: tokenDTO.refreshToken})
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};
