import {
    addDepartmentModel,
    getDepartmentModel,
    updateDepartmentModel,
    deleteDepartmentModel,
    getAllDepartmentsModel
} from '../../models/departments/departments'
import {
    departmentDTOType,
} from "../../types/departmentsTypes";

import {
    documentIdType,
    getDocumentResponseStatusType,
    deleteDocumentResponseStatusType,
    updateDocumentResponseStatusType,
} from "../../types/general";

const addDepartmentService = (departmentDTO: departmentDTOType, client) => {
    if (departmentDTO.name.length !== 0) {
        return addDepartmentModel(departmentDTO, client)
    }
};

const getAllDepartmentsService = (client) => {
    return getAllDepartmentsModel(client)
};

const updateDepartmentService = (updateDepartmentDTO, client) => {
    if (updateDepartmentDTO.id.length !== 0) {
        return updateDepartmentModel(updateDepartmentDTO, client)
            .then((status: updateDocumentResponseStatusType) => {
                if (status.ok === 1) {
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
            .then((status: getDocumentResponseStatusType) => {
                if (status.length !== 0) {
                    return status;
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

const deleteDepartmentService = (deleteDepartmentDTO: documentIdType, client) => {
    if (deleteDepartmentDTO.id.length !== 0) {
        return deleteDepartmentModel(deleteDepartmentDTO, client)
            .then((status: deleteDocumentResponseStatusType) => {
                if (status.deletedCount !== 0) {
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
    getAllDepartmentsService
}
