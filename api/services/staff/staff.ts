import {StaffItemDTOType, StaffResponseType, StaffDTOType} from '../../types/staff';
import {
    addStaffModel,
    getAllStaffModel,
    updateStaffModel,
    deleteStaffModel,
    getAllManagerStaffModel,
    getAllBarberStaffModel,
} from '../../models/staff/staff';
import {deleteDocumentResponseStatusType, documentIdType, updateDocumentResponseStatusType} from '../../types/general';
import {getImageService} from '../media/media';
import {normalizeImage} from '../../utils/staff/normalizeImage';

export const addStaffService = (assistanceDTO: StaffItemDTOType, client) => {
    if (assistanceDTO.name.length !== 0) {
        return addStaffModel(assistanceDTO, client)
            .then((data: StaffResponseType) => {
                return getImageService(data.ops[0].imageId, client)
                    .then(image => {
                        return {
                            image: normalizeImage(image),
                            ...data.ops[0]
                        }
                    });
            });


    }
};

export const getAllStaffService = (client) => {
    return getAllStaffModel(client)
};

export const getAllManagerStaffService = async (client) => {
    const manager = await getAllManagerStaffModel(client)
        .then((data: StaffDTOType) => data);

    return Promise.all(manager.map(async (item) => {
        const image = await getImageService(item.imageId, client).then(image => image);

        return {
            image: normalizeImage(image),
            ...item
        }
    }));
};

export const getAllBarberStaffService = async (client) => {
    const barberStaff = await getAllBarberStaffModel(client)
        .then((data: StaffDTOType) => data);

    return Promise.all(barberStaff.map(async (item) => {
        const image = await getImageService(item.imageId, client).then(image => image);

        return {
            image: normalizeImage(image),
            ...item
        }
    }));
};

export const updateStaffService = (updateStaffDTO, client) => {
    if (updateStaffDTO.id.length !== 0) {
        return updateStaffModel(updateStaffDTO, client)
            .then((status: updateDocumentResponseStatusType) => {
                if (status.ok === 1) {
                    return getImageService(status.value.imageId, client)
                        .then(image => {
                            return {
                                image: normalizeImage(image),
                                ...status.value
                            }
                        });
                }

                throw Error('Staff was not updated')
            })
            .catch(error => {
                throw Error(error)
            });
    } else {
        throw new Error('Staff id is required')
    }
};

export const deleteStaffService = (deleteAssistanceDTO: documentIdType, client) => {
    if (deleteAssistanceDTO.id.length !== 0) {
        return deleteStaffModel(deleteAssistanceDTO, client)
            .then((status: deleteDocumentResponseStatusType) => {
                if (status.deletedCount !== 0) {
                    return 'Staff was deleted successfully'
                }

                throw Error('Staff was not deleted')
            })
            .catch(error => {
                throw Error(error)
            });
    } else {
        throw new Error('Staff id is required')
    }
};
