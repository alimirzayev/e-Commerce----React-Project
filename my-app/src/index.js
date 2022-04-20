import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { createStore } from 'redux'
import Reducer from './Reducer'
import { Provider } from 'react-redux'
const store = createStore(Reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>,
  </Provider>,

  document.getElementById('root')
);