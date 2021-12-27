import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Config from './pages/config';

export default () => {
    return (
        <Switch>
            <Route exat path="/">
                <Home />
            </Route>

            <Route exat path="/config">
                <Config />
            </Route>

            <Route exat path="/sobre">
                Sobre
            </Route>
        </Switch>
    );
}