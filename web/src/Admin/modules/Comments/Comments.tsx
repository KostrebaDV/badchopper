import React from 'react';
import {CommentsContextProvider} from "./store";
import {CommentsHeader} from "./components/CommentsHeader/CommentsHeader";
import {CommentsModalsProvider} from './components/CommentsModalsProvider/CommentsModalsProvider';
import {CommentsList} from './components/CommentsList/CommentsList';

const Comments = () => {
    return (
        <CommentsContextProvider>
            <CommentsModalsProvider>
                <CommentsHeader />
                <CommentsList />
            </CommentsModalsProvider>
        </CommentsContextProvider>
    );
};

export {Comments};
