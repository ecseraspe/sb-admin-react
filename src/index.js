import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.css';
import './styles/sb-admin.css';
import App from './containers/App';

const rootEl = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootEl
);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default
    ReactDOM.render(
      <BrowserRouter>
        <NextApp />
      </BrowserRouter>,
      rootEl
    )
  })
}