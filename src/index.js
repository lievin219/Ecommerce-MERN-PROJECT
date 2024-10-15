import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from 'react-auth-kit';

import createStore from 'react-auth-kit/createStore';
import reportWebVitals from './reportWebVitals';
 import ShopContextProvider from './Context/ShopContext';
 const store = createStore({
  authType: 'cookie',
  authName: 'authTokenii',
  cookieSecure: false,
  cookieDomain: window.location.hostname,
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <AuthProvider 
  authType="cookie"
    authName="authTokenii"
    cookieSecure={false}
    store={store}>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
</AuthProvider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
