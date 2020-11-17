import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/header';
import DoubleAuth from './auth/double-auth/double-auth';
import Login from './auth/login/login';
import Register from './auth/register/register';

import PwdRecovery from './auth/pwd-recovery/pwd-recovery'

import {ProtectedRoute, ProtectedRouteProps} from './guard/auth-gard';

import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";

import reportWebVitals from './reportWebVitals';

const defaultProtectedRouteProps: ProtectedRouteProps = {
  isAuthenticated: false,
  authenticationPath: '/login',
};


ReactDOM.render(
    <Router>
      <Switch>
        <Route exact={true} path="/login">
          <Login />
        </Route>
        <Route exact={true} path="/register">
          <Register />
        </Route>
        <Route exact={true} path="/double-auth">
          <DoubleAuth />
        </Route>
        <Route exact={true} path="/password-lost">
          <PwdRecovery />
        </Route>
        <ProtectedRoute {...defaultProtectedRouteProps} exact={true} path='/' component={Header}/>
        <Route path="*">
          <Header />
        </Route>
      </Switch>
    </Router>,
  document.getElementById('root')
  );

reportWebVitals();
