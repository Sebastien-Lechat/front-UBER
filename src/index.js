import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Header from './component/header/header';
import DoubleAuth from './auth/double-auth/double-auth';
import Login from './auth/login/login';
import Register from './auth/register/register';
import PwdRecovery from './auth/pwd-recovery/pwd-recovery'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PwdRecovery />
  </React.StrictMode>,
  document.getElementById('root')
  );
  
//   ReactDOM.render(
//     <React.StrictMode>
//     <Login />
//   </React.StrictMode>,
//   document.getElementById('root2')
// )

reportWebVitals();
