import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import {ShopContextProvider} from './Context/ShopContext';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ShopContextProvider>
);
