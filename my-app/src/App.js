import './App.css';
import React, { useState } from 'react'

import { MainContext } from './Context';

import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { CartProvider } from "react-use-cart";

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './Page/Home';
import Checkout from './Page/Checkout';
import Detail from './Page/Detail';
import Categorypage from './Page/Categorypage';
import JSONDATA from './components/Main/Search.json'

function App() {

  const [newJson, setNewJson] = useState(JSONDATA)

  const update = (param) => {
    setNewJson(param);
  }

  const data = {
    JSONDATA,
    newJson,
    update
  }

  return (
    <div className="App">
      <MainContext.Provider value={data} >

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
