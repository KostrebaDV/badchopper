import { ObjectID } from 'mongodb';
import CONSTS from './consts'
import {
    departmentDTOType
} from "../../types/departmentsTypes";

import {
    documentIdType
} from "../../types/general";

const addDepartmentModel = (departmentDTO: departmentDTOType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONSTS.BASE_COLLECTION)
            .insertOne(departmentDTO)
                .then(res => resolve(res))
                .catch(err => reject(err));
    });
};

const updateDepartmentModel = (updateDepartmentDTO: departmentDTOType, client) => {
    const {
        id,
        name,
        description,
        address
    } = updateDepartmentDTO;

    return new Promise((resolve, reject) => {
        client
            .collection(CONSTS.BASE_COLLECTION)
            .findOneAndUpdate(
                {
                    _id: new ObjectID(id)
                },
                {
                    $set: {
                        name,
                        description,
                        address : {
                            city: address.city,
                            street: address.street
                        }
                    }
                }
            )
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

const deleteDepartmentModel = (deleteDepartmentDTO: documentIdType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONSTS.BASE_COLLECTION)
            .findOneAndDelete({_id: new ObjectID(deleteDepartmentDTO.id)})
                .then(res => resolve(res))
                .catch(err => reject(err));
    });
};

const getAllDepartmentsModel = (client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONSTS.BASE_COLLECTION)
            .find()
            .toArray()
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

const getDepartmentModel = (getDepartmentDTO: documentIdType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONSTS.BASE_COLLECTION)
            .find({_id: new ObjectID(getDepartmentDTO.id)})
            .toArray()
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export {
    addDepartmentModel,
    getDepartmentModel,
    updateDepartmentModel,
    deleteDepartmentModel,
    getAllDepartmentsModel
}
