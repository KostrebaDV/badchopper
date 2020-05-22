import { ObjectID } from 'mongodb';
import CONSTS from './consts'
import {
    DepartmentDTOType
} from "../../types/departmentsTypes";

import {
    documentIdType
} from "../../types/general";

const addDepartmentModel = (departmentDTO: DepartmentDTOType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONSTS.BASE_COLLECTION)
            .insertOne(departmentDTO)
                .then(res => resolve(res))
                .catch(err => reject(err));
    });
};

const updateDepartmentModel = (updateDepartmentDTO: DepartmentDTOType, client) => {
    const {
        id,
        name,
        description,
        address,
        phone,
        location,
        imageId
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
                            street: address.street,
                            number: address.number,
                        },
                        phone,
                        location: {
                            latitude: location.latitude,
                            longitude: location.longitude
                        },
                        imageId
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
            .findOne({_id: new ObjectID(getDepartmentDTO.id)}, {})
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
