import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/sb-admin.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root')

ReactDOM.render(
  <App />, 
  rootEl
);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default
    ReactDOM.render(
      <NextApp />,
      rootEl
    )
  })
}