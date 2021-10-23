import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;