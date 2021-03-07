import React from 'react';
// import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'
import { render } from 'react-dom'

render(
  <Provider store={store}>
    <BrowserRouter>
    <App/>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)


