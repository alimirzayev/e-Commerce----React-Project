import React, { Fragment, Suspense, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './Page/Home';
import Checkout from './Page/Checkout';
import Detail from './Page/Detail';
import Categorypage from './Page/Categorypage';
import Blogpage from './Page/Blogpage';
import BlogPageInner from './components/Blog/BlogpageInner/BlogPageInner';
import Wishlist from './Page/Wishlist';

function App() {

  return (
    <Fragment>
      <Suspense>
            <Header />
              <Switch>

                <Route exact path="/">
                  <Home />
                </Route>

                <Route exact path="/checkout">
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

                <Route exact path="/bloginner">
                  <BlogPageInner />
                </Route>

              </Switch>
            <Footer />
      </Suspense>
    </Fragment>
  );
}

export default App;
