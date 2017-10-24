import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store, { history } from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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
