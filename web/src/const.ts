export const ROUTES = {
    ADMIN_PANEL: '/adminPanel',
    LOGIN: '/login',
    CLIENT: '/',
};

export const yClientsUrl = 'https://n203813.alteg.io/group:92790/city:all?referrer=http:%2F%2Fbadchopper.com.ua%2F#1';

export const LANGUAGE_CODES = ['UA', 'RU', 'EN'];
// @ts-ignore
export const HOST = process.env.NODE_ENV === 'development'
    ? 'http://localhost:4040/'
    : 'http://badchopper.com.ua/';
