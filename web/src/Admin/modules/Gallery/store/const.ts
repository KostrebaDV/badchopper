import {createContext} from 'react';
import { GalleriesContextType } from './types';

const GalleryContextDefaultValues = {
    galleries: [],
    setAllGalleries: () => {},
    setGallery: () => {},
    updateGallery: () => {},
    removeOneGallery: () => {}
};

export const GET_ALL_GALLERIES = 'GET_ALL_GALLERIES';
export const SET_GALLERY = 'SET_GALLERY';
export const DELETE_GALLERY = 'DELETE_GALLERY';
export const UPDATE_GALLERY = 'UPDATE_GALLERY';
export const GalleryContext = createContext<GalleriesContextType>(GalleryContextDefaultValues);
export const initialState = {galleries: []};
