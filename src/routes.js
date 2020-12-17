import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Erro from './pages/Erro';

const Routes = () => {
    return(
        <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={Movie}/>
            <Route path="*" component={Erro}/>
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;

