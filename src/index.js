import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShoContextProvider from './Contexet/ShopContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ShoContextProvider>
    <App />
    </ShoContextProvider>
  </React.StrictMode>
);

