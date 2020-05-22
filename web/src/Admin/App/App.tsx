import React, { useContext } from 'react';

import {Navigation} from '../adminComponents/Navigation/Navigation';
import {Content} from '../adminComponents/Content/Content';
import {OverlayCloak} from '../baseComponents/OverlayCloak/OverlayCloak';
import {AdminAppContext} from './store/AdminAppContext/const';
import {AdminAppContextProvider} from './store/AdminAppContext/AdminAppContext';
import {AdminAppFormContextProvider} from './store/AdminAppFormContext/AdminAppFormContext';
import {NavigationContextProvider} from '../adminComponents/Navigation/store/NavigationContext';
import {Notification} from '../baseComponents/Notification/Notification';

const App = () => {
    const { showOverlayCloak, handleOverlayClose } = useContext(AdminAppContext);

    return (
        <div style={{ display: 'flex' }}>
            <Navigation />
            <Content />
            <OverlayCloak
                show={showOverlayCloak}
                handleOverlayClose={handleOverlayClose}
            />
            <Notification/>
        </div>
    );
};

const AdminAppWithContexts = () => (
    <AdminAppContextProvider>
        <AdminAppFormContextProvider>
            <NavigationContextProvider>
                <App />
            </NavigationContextProvider>
        </AdminAppFormContextProvider>
    </AdminAppContextProvider>
);

export default AdminAppWithContexts;


