import {createContext} from 'react';
import { CommentsContextType } from './types';

const CommentsContextDefaultValues = {
    comments: [],
    setComments: () => {},
    setComment: () => {},
    updateComment: () => {},
    removeComment: () => {}
};

export const SET_COMMENTS = 'SET_COMMENTS';
export const SET_COMMENT = 'SET_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const CommentsContext = createContext<CommentsContextType>(CommentsContextDefaultValues);
export const initialState = {comments: []};
