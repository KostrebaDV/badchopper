import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { AdminApp } from './Admin/AdminComponents/AdminApp/AdminApp';
import { ClientApp } from './Client/ClientComponents/ClientApp';
import { ROUTES } from './contst';

import './styles/base.css'

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path={ROUTES.ADMIN_PANEL}>
                  <AdminApp />
              </Route>
              <Route path={ROUTES.CLIENT}>
                  <ClientApp />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
