import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store, { history } from './Utilities/store';
import registerServiceWorker from './Utilities/registerServiceWorker';
import './index.css';
import App from './App/App';

const target = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <div>
        <App />
      </div>
    </BrowserRouter>
  </Provider>, 
  target
);

registerServiceWorker();
