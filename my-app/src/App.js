import './App.css';
import React, { useState } from 'react'

import { MainContext, useContext } from './Context';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './Page/Home';
import Checkout from './Page/Checkout';
import Detail from './Page/Detail';
import Categorypage from './Page/Categorypage';

function App() {

  const [methods, setMethods] = useState({

  })

  const data = {
    ...methods
  }

  return (
    <div className="App">
      <MainContext.Provider >

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

      </MainContext.Provider >
    </div>
  );
}

export default App;
