import {
    addDepartmentModel,
    deleteDepartmentModel
} from '../../models/departments/departments'
import {
    departmentDTOType,
    deleteDepartmentDTOType
} from "../../types/departmentsTypes";

type dCount = {
    deletedCount: number
}

const addDepartmentService = (departmentDTO: departmentDTOType, client) => {
    // validation level
    if (departmentDTO.name.length !== 0) {
        return addDepartmentModel(departmentDTO, client)
    }
};

const deleteDepartmentService = (deleteDepartmentDTO: deleteDepartmentDTOType, client) => {
    // validation level
    if (deleteDepartmentDTO.id.length !== 0) {
        return deleteDepartmentModel(deleteDepartmentDTO, client)
            .then((status: dCount) => {
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
    deleteDepartmentService
}
