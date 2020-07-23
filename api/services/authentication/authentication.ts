import {TokenType} from '../../types/authenticationTypes';
import {addTokenModel, deleteTokenModel, getTokenModel} from '../../models/authentication/authentication';

export const saveRefreshToken = (tokenDTO: TokenType, client) => {
    if (tokenDTO.refreshToken.length !== 0) {
        return addTokenModel(tokenDTO, client)
    }
};

export const getRefreshToken = (tokenDTO: TokenType, client) => {
    return getTokenModel(tokenDTO, client);
};

export const deleteRefreshToken = (tokenDTO: TokenType, client) => {
    if (tokenDTO.refreshToken.length !== 0) {
        return deleteTokenModel(tokenDTO, client)
    }
};
