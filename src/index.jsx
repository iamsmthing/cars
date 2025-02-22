import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index';
import App from './App';
import 'bulma/css/bulma.css';
import './styles.css'

const element = document.getElementById('root');
const root = createRoot(element);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
