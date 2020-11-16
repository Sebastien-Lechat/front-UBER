import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoubleAuth from './auth/double-auth/double-auth';
import Login from './auth/login/login';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <DoubleAuth />
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
