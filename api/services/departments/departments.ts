import {
    addDepartmentModel,
    getDepartmentModel,
    updateDepartmentModel,
    deleteDepartmentModel,
    getAllDepartmentsModel
} from '../../models/departments/departments'
import {
    DepartmentDTOType,
    DepartmentsDTOType
} from "../../types/departmentsTypes";

import {
    documentIdType,
    getDocumentResponseStatusType,
    deleteDocumentResponseStatusType,
    updateDocumentResponseStatusType,
} from "../../types/general";
import {getImageService, getAllImagesService} from '../media/media';
import {
    getAllStaffService,
    getStaffByIdService
} from '../staff/staff';
import {getAllAssistanceService} from '../assistance/assistance';
import {getPublicDepartmentId} from '../../utils/departments/getPublicDepartmentId';
import {updateClientSyncHashService} from '../clientSyncHash/clientSyncHash';

const addDepartmentService = (departmentDTO: DepartmentDTOType, client) => {
    if (departmentDTO.name.length !== 0) {
        return addDepartmentModel(
            {
                ...departmentDTO,
                publicId: getPublicDepartmentId(departmentDTO.name)
            },
            client
        )
        .then(() => updateClientSyncHashService(client))
    }
};

const getAllDepartmentsService = async (client) => {
    const departments = await getAllDepartmentsModel(client)
        .then((data: DepartmentsDTOType) => data);

    return Promise.all(departments.map(async (department) => {
        const image = await getImageService(department.imageId, client).then(image => image);

        return {
            image,
            ...department
        }
    }));
};

const getAllDepartmentsClientService = async (client) => {
    const departments = await getAllDepartmentsModel(client)
        .then((data: DepartmentsDTOType) => data);

    return Promise.all(departments.map(async (department) => {
        const {staff, assistance, _id, ...rest} = department;

        const image = await getImageService(department.imageId, client).then(image => image);
        const effectImage = await getImageService(department.effectImageId, client).then(image => image);
        const personal = await getStaffByIdService(client, department.staff)

        return {
            image,
            effectImage,
            staff: personal,
            ...rest
        }
    }));
};

const updateDepartmentService = (updateDepartmentDTO, client) => {
    if (updateDepartmentDTO.id.length !== 0) {
        return updateDepartmentModel(
            {
                ...updateDepartmentDTO,
                publicId: getPublicDepartmentId(updateDepartmentDTO.name)
            },
                client)
            .then((status: updateDocumentResponseStatusType) => {
                if (status.ok === 1) {
                    updateClientSyncHashService(client);

                    return 'Department was updated successfully'
                }

                throw Error('Department was not updated')
            })
            .catch(error => {
                throw Error(error)
            });
    } else {
        throw new Error('Department id is required')
    }
};

const getDepartmentService = (getDepartmentDTO: documentIdType, client) => {
    if (getDepartmentDTO.id.length !== 0) {
        return getDepartmentModel(getDepartmentDTO, client)
            .then((data: getDocumentResponseStatusType) => {
                if (data._id) {
                    return getImageService(data.imageId, client).then(image => {
                        return {
                            image,
                            ...data
                        }
                    });
                }

                throw Error('Department was not selected')
            })
            .catch(error => {
                throw Error(error)
            });
    } else {
        throw new Error('Department id is required')
    }
};

const getAddDepartmentDataService = async (client) => {
    const media = await getAllImagesService(client)
    const staff = await getAllStaffService(client)
    const assistance = await getAllAssistanceService(client)

    return {
        media,
        staff,
        assistance
    }
};

const deleteDepartmentService = (deleteDepartmentDTO: documentIdType, client) => {
    if (deleteDepartmentDTO.id.length !== 0) {
        return deleteDepartmentModel(deleteDepartmentDTO, client)
            .then((status: deleteDocumentResponseStatusType) => {
                if (status.deletedCount !== 0) {
                    updateClientSyncHashService(client);

                    return 'Department was deleted successfully'
                }

                throw Error('Department was not deleted')
            })
            .catch(error => {
                throw Error(error)
            });
    } else {
        throw new Error('Department id is required')
    }
};

export {
    addDepartmentService,
    getDepartmentService,
    updateDepartmentService,
    deleteDepartmentService,
    getAllDepartmentsService,
    getAddDepartmentDataService,
    getAllDepartmentsClientService
}
