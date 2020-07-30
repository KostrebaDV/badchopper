import {getTranslationsModel} from '../../models/translations/translations';

export const translationService = (client) => {
    return getTranslationsModel(client)
        .then((data: any[]) => {
            const translations = {};

            data.forEach(item => {
                translations[item.translationCode] = {...item}
            })

            return translations;
        })
};
