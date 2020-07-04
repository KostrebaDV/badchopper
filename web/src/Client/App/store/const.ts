import {createContext} from 'react';
import { AppContextType } from './types';

export const AppContextDefaultValues = {
    departments: [],
    assistance: [],
    feedbacks: [],
    galleries: {
        mainPageGallery: [],
        galleryImages: []
    },
    setDepartments: () => {},
    setGalleries: () => {},
    setAssistance: () => {},
    setFeedbacks: () => {}
};

export const SET_DEPARTMENTS = 'SET_DEPARTMENTS';
export const SET_GALLERIES = 'SET_GALLERIES';
export const SET_ASSISTANCE = 'SET_ASSISTANCE';
export const SET_FEEDBACKS = 'SET_FEEDBACKS';
export const AppContext = createContext<AppContextType>(AppContextDefaultValues);
