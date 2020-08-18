import {addDepartment, editDepartment} from '../../api';

const normalizeRequestData = (values) => {
    const {
        city,
        street,
        number,
        descriptionEN,
        descriptionRU,
        descriptionUA,
        cityEN,
        cityRU,
        cityUA,
        streetRU,
        streetUA,
        streetEN,
        ...rest
    } = values;

    return {
        ...rest,
        address: {
            street: {
                ru: streetRU,
                ua: streetUA,
                en: streetEN,
            },
            city: {
                ru: cityRU,
                ua: cityUA,
                en: cityEN,
            },
            number: values.number
        },
        description: {
            ru: descriptionRU,
            ua: descriptionUA,
            en: descriptionEN,
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
