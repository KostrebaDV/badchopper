import { ObjectID } from 'mongodb';
import CONSTS from './consts'
import {
    departmentDTOType,
    deleteDepartmentDTOType
} from "../../types/departmentsTypes";

const addDepartmentModel = (departmentDTO: departmentDTOType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONSTS.BASE_COLLECTION)
            .insertOne(departmentDTO)
                .then(res => resolve(res))
                .catch(err => reject(err));
    });
};

const deleteDepartmentModel = (deleteDepartmentDTO: deleteDepartmentDTOType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONSTS.BASE_COLLECTION)
            .deleteOne({_id: new ObjectID(deleteDepartmentDTO.id)})
                .then(res => resolve(res))
                .catch(err => reject(err));
    });
};

export {
    addDepartmentModel,
    deleteDepartmentModel
}
