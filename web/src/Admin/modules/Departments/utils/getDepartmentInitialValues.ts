import {isNullOrUndefined} from '../../../../utils';

export default (departmentData) => {
    const {
        address,
        description,
        location, name,
        phone,
        image,
        staff,
        assistance,
    } = departmentData;

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
            descriptionRU: 'error',
            descriptionUA: 'error',
            descriptionEN: 'error',
            streetRU: 'error',
            streetUA: 'error',
            streetEN: 'error',
            cityUA: 'error',
            cityRU: 'error',
            cityEN: 'error',
            staff: [],
            assistance: [],
        };
    }

    return {
        cityUA: address.city.ua,
        cityRU: address.city.ru,
        cityEN: address.city.en,
        streetRU: address.street.ru,
        streetUA: address.street.ua,
        streetEN: address.street.en,
        number: address.number,
        street: address.street,
        descriptionRU: description.ru,
        descriptionEN: description.en,
        descriptionUA: description.ua,
        latitude: location.latitude,
        longitude: location.longitude,
        name,
        phone,
        imageId: image._id,
        staff,
        assistance
    }
}
