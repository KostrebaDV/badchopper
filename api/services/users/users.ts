import jwt from 'jsonwebtoken';
import {UserItemDTOType} from '../../types/users';
import {addUserModel, getUserModel} from '../../models/users/users';
import {bcryptPassword, comparePassword} from '../../utils/users/bcryptPassword';
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_REFRESH_KEY = process.env.JWT_REFRESH_KEY;

export const addUserService = async (userDTO: UserItemDTOType, client) => {
    const {name, login, surname, password, roleId} = userDTO;
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
            status: 400,
            msg: 'Cannot find user'
        });
    }

    if (await comparePassword(loginDTO.password, user.password)) {
        const accessToken = jwt.sign({name: user.name}, JWT_SECRET_KEY, {expiresIn: '15s'})
        const refreshToken = jwt.sign({name: user.name}, JWT_REFRESH_KEY)

        return Promise.resolve({
            status: 200,
            accessToken,
            refreshToken
        });
    } else {
        return Promise.reject({
            status: 500,
            msg: 'Wrong password'
        });
    }
};
