import React from 'react';
import {
    Routes,
    Route,
    BrowserRouter
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
            <BrowserRouter basename='/'>
                <Routes>
                    <Route element={<Login/>} path={ROUTES.LOGIN} />
                    <Route element={<AdminApp/>} path={ROUTES.ADMIN_PANEL} />
                    <Route element={<ClientApp/>} path={ROUTES.CLIENT} />
                </Routes>
            </BrowserRouter>
        </FormContextProvider>
    );
}

export default App;
