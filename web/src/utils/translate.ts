import Cookies from 'js-cookie';

export const translate = (code) => {
    const languageCode = Cookies.get('language');
    const t = localStorage.getItem('translations');

    if (t === null) return;

    return JSON.parse(t)[code][languageCode];
};
