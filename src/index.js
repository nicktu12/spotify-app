import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Utilities/store';
import registerServiceWorker from './Utilities/registerServiceWorker';
import App from './App/App';
import './Styles/index.css';

const target = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter> 
      <div>
        <App />
      </div>
    </BrowserRouter>
  </Provider>, 
  target
);

registerServiceWorker();
