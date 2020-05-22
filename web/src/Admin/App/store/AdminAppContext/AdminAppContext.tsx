import React, {useState, useReducer} from 'react';

import {
    AdminAppContext,
    ADD_UPLOADER_TO_GLOBAL_CONTEXT,
    REMOVE_UPLOADER_FROM_GLOBAL_CONTEXT,
    SHOW_NOTIFICATION,
    REMOVE_NOTIFICATION
} from './const';
import {AdminAppContextType} from './types';
import { reducer } from './reducer';

export const AdminAppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {
        notifications: [],
        upLoaders: {}
    });
    const [showOverlayCloak, setShowOverlayCloak] = useState(false);
    const [handleOverlayClose, setHandleOverlayClose] = useState<() => void>();

    const handleShowOverlayCloak = (show) => {
        setShowOverlayCloak(show);
    };

    const addUploaderToGlobalContext = (upLoader) => {
        dispatch({
            type: ADD_UPLOADER_TO_GLOBAL_CONTEXT,
            upLoader
        });
    };

    const removeUploaderFromGlobalContext = (upLoader) => {
        dispatch({
            type: REMOVE_UPLOADER_FROM_GLOBAL_CONTEXT,
            upLoader
        });
    };

    const showNotification = (notification) => {
        dispatch({
            type: SHOW_NOTIFICATION,
            notification
        });
    };

    const removeNotification = (notificationId) => {
        dispatch({
            type: REMOVE_NOTIFICATION,
            notificationId
        });
    };

    const contextValues: AdminAppContextType = {
        showOverlayCloak,
        handleOverlayClose,
        showNotification,
        removeNotification,
        setHandleOverlayClose,
        handleShowOverlayCloak,
        addUploaderToGlobalContext,
        removeUploaderFromGlobalContext,
        ...state
    };

    return (
        <AdminAppContext.Provider
            value={contextValues}
        >
            {children}
        </AdminAppContext.Provider>
    );
};

