import Cookies from 'js-cookie';
import translations from '../static/translations/translations';

export const translate = (code) => {
    const languageCode = Cookies.get('language');

    return translations[code][languageCode];
};
