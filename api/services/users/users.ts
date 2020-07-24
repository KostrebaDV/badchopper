import {UserItemDTOType} from '../../types/users';
import {addUserModel, getUserModel, getAdminUserModel} from '../../models/users/users';
import {bcryptPassword, comparePassword} from '../../utils/users/bcryptPassword';
import {createAccessToken, createRefreshToken, getRefreshToken, getTokenBody} from '../../utils/authentication/authentication';
import {
    saveRefreshToken,
    deleteRefreshToken,
    getRefreshToken as getRefreshTokenService
} from '../authentication/authentication';
import {TokenType} from '../../types/authenticationTypes';


export const addUserService = async (userDTO: UserItemDTOType, client) => {
    const {name, login, surname, password, roleId} = userDTO;

    const adminUser = await getAdminUserModel(roleId, client).then((data: UserItemDTOType) => data)

    if (adminUser !== null && roleId === 1) {
        return Promise.reject({
            status: 403,
            msg: 'Admin user already exist'
        });
    }

    const cryptPassword = await bcryptPassword(password);

    return addUserModel({
        name,
        login,
        surname,
        password: cryptPassword,
        roleId
    }, client)
};

export const loginUserService = async (loginDTO, client) => {
    const user = await getUserModel(loginDTO.login, client).then((data: UserItemDTOType) => data)

    if (user === null) {
        return Promise.reject({
            status: 401,
            msg: 'Cannot find user'
        });
    }

    if (await comparePassword(loginDTO.password, user.password)) {
        const accessToken = createAccessToken({name: user.name, role: user.roleId});
        const refreshToken = createRefreshToken({name: user.name, role: user.roleId})

        await saveRefreshToken({
            refreshToken,
            userName: user.name
        }, client);

        return Promise.resolve({
            status: 201,
            accessToken,
            refreshToken
        });
    } else {
        return Promise.reject({
            status: 403,
            msg: 'Wrong password'
        });
    }
};

export const logoutUserService = async (request, client) => {
    console.log(request.headers);
    const refreshToken = getRefreshToken(request);
    const decodeTokenBody = getTokenBody(refreshToken);

    const logoutDTO = {
        refreshToken,
        userName: decodeTokenBody.name
    };

    const existToken = await getRefreshTokenService(logoutDTO, client).then((data: TokenType) => data)

    if (existToken === null) {
        return Promise.resolve({
            status: 200,
            msg: 'No logged user'
        });
    }

    await deleteRefreshToken(logoutDTO, client)

    return Promise.resolve({
        status: 204,
        msg: `User '${existToken.userName}' has logout`
    });
};
