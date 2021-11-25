import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import Reducer from './Reducer'
import { Provider } from 'react-redux'
const store = createStore(Reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router >
  </Provider>,

  document.getElementById('root')
);