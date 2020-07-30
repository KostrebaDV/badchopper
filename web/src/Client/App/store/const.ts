import {createContext} from 'react';
import { AppContextType } from './types';

export const AppContextDefaultValues = {
    departments: [],
    assistance: [],
    feedbacks: [],
    languageCode: 'ua',
    galleries: {
        mainPageGallery: [],
        galleryImages: []
    },
    setDepartments: () => {},
    setGalleries: () => {},
    setAssistance: () => {},
    setFeedbacks: () => {},
    setLanguageCode: () => {}
};

export const SET_DEPARTMENTS = 'SET_DEPARTMENTS';
export const SET_GALLERIES = 'SET_GALLERIES';
export const SET_ASSISTANCE = 'SET_ASSISTANCE';
export const SET_FEEDBACKS = 'SET_FEEDBACKS';
export const SET_LANGUAGE_CODE = 'SET_LANGUAGE_CODE';
export const AppContext = createContext<AppContextType>(AppContextDefaultValues);
