import {addDepartment, editDepartment} from '../../api';

const normalizeRequestData = (values) => {
    const {
        city,
        street,
        number,
        latitude,
        longitude,
        ...rest
    } = values;

    return {
        ...rest,
        address: {
            street: values.street,
            city: values.city,
            number: values.number
        },
        location: {
            latitude: values.latitude,
            longitude: values.longitude
        }
    };
};

export const addDepartmentHook = (values, onAddDepartmentSuccess) => {
    const requestData = normalizeRequestData(values);

    return addDepartment(requestData)
        .then(() => {
            onAddDepartmentSuccess();
        })
};

export const editDepartmentHook = (values, onEditDepartmentSuccess) => {
    const requestData = normalizeRequestData(values);

    return editDepartment(requestData)
        .then(() => {
            onEditDepartmentSuccess();
        })
};
