import './App.css';
import React, { useState } from 'react';

import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { CartProvider } from "react-use-cart";

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './Page/Home';
import Checkout from './Page/Checkout';
import Detail from './Page/Detail';
import Categorypage from './Page/Categorypage';
import Blogpage from './Page/Blogpage';

function App() {

  return (
    <div className="App">
      <CartProvider>
        <Header />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route exact path="/products/:id">
            <Detail />
          </Route>

          <Route exact path="/category">
            <Categorypage />
          </Route>

          <Route exact path="/blogpage">
            <Blogpage />
          </Route>

        </Switch>

        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
