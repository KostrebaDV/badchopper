import {isNullOrUndefined} from '../../../../utils';

export default (departmentData) => {
    const { address, description, location, name, phone, image, staff, assistance } = departmentData;

    if (isNullOrUndefined(image)) {
        return {
            city: 'error',
            number: 'error',
            street: 'error',
            description: 'error',
            latitude: 'error',
            longitude: 'error',
            name: 'error',
            phone: 'error',
            imageId: 'error',
            staff: [],
            assistance: [],
        };
    }

    return {
        city: address.city,
        number: address.number,
        street: address.street,
        description,
        latitude: location.latitude,
        longitude: location.longitude,
        name,
        phone,
        imageId: image._id,
        staff,
        assistance,
    }
}
