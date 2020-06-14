import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import CreateCompany from './pages/CreateCompany';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreateCompany} path="/create-company"/>
        </BrowserRouter>
    );
}

export default Routes;