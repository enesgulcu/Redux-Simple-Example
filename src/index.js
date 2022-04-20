import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//store yapısına erişmek ve kullanmak için tanımladık
import { store } from './redux/store';
//react ile redux arası bağlantıyı sağlar
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
     </Provider>
  </React.StrictMode>
);


