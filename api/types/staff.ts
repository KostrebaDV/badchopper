export type StaffItemDTOType = {
    id?: string;
    name: string;
    surname: string;
    position: string;
    imageId: string;
    instagramUrl: string;
    facebookUrl: string;
    yClientsUrl: string;
    description: string;
    patronymic: string;
}

export type StaffDTOType = StaffItemDTOType[]

export type StaffResponseType = {
    ops: StaffItemDTOType[]
}
