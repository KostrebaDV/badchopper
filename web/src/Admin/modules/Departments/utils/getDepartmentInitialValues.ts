import {isNullOrUndefined} from '../../../../utils';

export default (departmentData) => {
    const {
        address,
        description,
        location,
        name,
        phone,
        image,
        effectImageId,
        staff,
        assistance,
        departmentYClients
    } = departmentData;

    if (isNullOrUndefined(image)) {
        return {
            city: 'error',
            number: 'error',
            street: 'error',
            description: 'error',
            location: 'error',
            name: 'error',
            effectImageId: 'error',
            phone: 'error',
            imageId: 'error',
            descriptionRU: 'error',
            descriptionUA: 'error',
            descriptionEN: 'error',
            departmentYClients: 'error',
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
    console.log(effectImageId);

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
        location,
        name,
        phone,
        imageId: image._id,
        effectImageId,
        staff,
        assistance,
        departmentYClients
    }
}
