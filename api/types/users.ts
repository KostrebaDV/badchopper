export type UserItemDTOType = {
    id?: string;
    name: string;
    password: string;
    surname: string;
    login: string;
    email?: string;
    roleId: number;
}

export type UserLoginDTOType = {
    login: string;
    password: string;
};

export type UserResponseType = {
    ops: UserItemDTOType[]
}
