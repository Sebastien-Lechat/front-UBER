import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Header from './component/header/header';
import DoubleAuth from './auth/double-auth/double-auth';
import Login from './auth/login/login';
import MyAccount from './account/myAccount/myAccount';
import UpdateMyAccount from './account/updateMyAccount/updateMyAccount'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UpdateMyAccount />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
