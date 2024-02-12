import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import AdminApp from './Admin/App/App';
import ClientApp from './Client/App/App';
import {ROUTES} from './const';

import './styles/base.css';
import FormContextProvider from '../src/store/FormContext';
import {Login} from './Admin/modules/Login/Login';

function App() {
    return (
        <FormContextProvider>
            <Router basename='/'>
                <Routes>
                    <Route path={ROUTES.LOGIN}>
                        <Login/>
                    </Route>
                    <Route path={ROUTES.ADMIN_PANEL}>
                        <AdminApp/>
                    </Route>
                    <Route path={ROUTES.CLIENT}>
                        <ClientApp/>
                    </Route>
                </Routes>
            </Router>
        </FormContextProvider>
    );
}

export default App;
