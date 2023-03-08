import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import BooksStore from "./stores/BooksStore";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const stores = {
  bookStore: new BooksStore()
}

root.render(
  <StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </StrictMode>
);
