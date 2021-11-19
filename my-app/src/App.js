import './App.css';
import React, { useState } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './Page/Home';
import Checkout from './Page/Checkout';
import Detail from './Page/Detail';
import Categorypage from './Page/Categorypage';

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

        </Switch>

        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
