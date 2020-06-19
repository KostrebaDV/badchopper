import React from 'react';
import {CommentsContextProvider} from "./store";
import {CommentsHeader} from "./components/CommentsHeader/CommentsHeader";

const Comments = () => {
    return (
        <CommentsContextProvider>
            <CommentsContextProvider>
                <CommentsHeader />
            </CommentsContextProvider>
        </CommentsContextProvider>
    );
};

export {Comments};