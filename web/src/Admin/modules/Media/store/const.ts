import {createContext} from 'react';
import { MediaContextType } from './types';

const MediaContextDefaultValues = {
    images: [],
    setAllImages: () => {}
};

export const GET_ALL_IMAGES = 'GET_ALL_IMAGES';
export const MediaContext = createContext<MediaContextType>(MediaContextDefaultValues);
export const initialState = {images: []};
