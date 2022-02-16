import './App.css';
import React from 'react';

import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './Page/Home';
import Checkout from './Page/Checkout';
import Detail from './Page/Detail';
import Categorypage from './Page/Categorypage';
import Blogpage from './Page/Blogpage';
import Wishlist from './Page/Wishlist';

function App() {

  return (
    <div className="App">
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

        <Route exact path="/wishlist">
          <Wishlist />
        </Route>

        <Route exact path="/blogpage">
          <Blogpage />
        </Route>

      </Switch>

      <Footer />
    </div >
  );
}

export default App;
