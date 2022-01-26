import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { StylesProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Product } from './components/views/Product/Product';
import { CartPage } from './components/views/CartPage/CartPage';
import { OrderForm } from './components/views/OrderForm/OrderForm';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <CssBaseline />
        <MainLayout>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/products/:id' component={Product} />
            <Route exact path='/cart' component={CartPage} />
            <Route exact path='/form' component={OrderForm} />
          </Switch>
        </MainLayout>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
