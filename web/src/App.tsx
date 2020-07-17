import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import AdminApp from './Admin/App/App';
import ClientApp from './Client/App/App';
import {ROUTES} from './const';

import './styles/base.css';
import FormContextProvider from '../src/store/FormContext';

function App() {
    return (
        <FormContextProvider>
            <Router basename='/'>
                <Switch>
                    <Route path={ROUTES.ADMIN_PANEL}>
                        <AdminApp/>
                    </Route>
                    <Route path={ROUTES.CLIENT}>
                        <ClientApp/>
                    </Route>
                </Switch>
            </Router>
        </FormContextProvider>
    );
}

export default App;
