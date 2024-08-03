import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShopContextProvider from './context/ShopContext';
import './index.css'; // Assuming you have some global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);
