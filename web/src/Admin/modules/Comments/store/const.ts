import {createContext} from 'react';
import { CommentsContextType } from './types';

const CommentsContextDefaultValues = {
    comments: [],
    setComments: () => {},
    updateComment: () => {},
    removeComment: () => {}
};

export const SET_COMMENTS = 'SET_COMMENTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const CommentsContext = createContext<CommentsContextType>(CommentsContextDefaultValues);
export const initialState = {comments: []};
