export const ROUTES = {
    ADMIN_PANEL: '/adminPanel',
    LOGIN: '/login',
    CLIENT: '/',
};

export const yClientsUrl = 'https://n203813.yclients.com/';

export const LANGUAGE_CODES = ['UA', 'RU', 'EN'];
// @ts-ignore
export const HOST = process.env.NODE_ENV === 'development'
                    ? 'http://localhost:4040/'
                    : 'http://185.25.116.2/'
