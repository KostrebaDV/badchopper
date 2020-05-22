import React from 'react';
import {MediaModalsProvider} from './components/MediaModalsProvider/MediaModalsProvider';
import {MediaContextProvider} from './store';
import {MediaListHeader} from './components/MediaList/MediaListHeader';
import {MediaListContent} from './components/MediaList/MediaListContent';

const Media = () => {
    return (
        <MediaContextProvider>
            <MediaModalsProvider>
                <MediaListHeader/>
                <MediaListContent/>
            </MediaModalsProvider>
        </MediaContextProvider>
    );
};

export {Media};
