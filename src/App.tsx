import React from 'react';
import Header from './component/header/header';
import DoubleAuth from './auth/double-auth/double-auth';
import Login from './auth/login/login';
import Register from './auth/register/register';
import PasswordRecovery from './auth/pwd-recovery/pwd-recovery'
import {ProtectedRoute, ProtectedRouteProps} from './guard/auth-gard';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import VerifyEmail from './auth/verify-email/verify-email';
import RequestPasswordRecovery from './auth/request-pwd-recovery/request-pwd-recovery';
import Myaccount from './pages/myAccount/myAccount';
import UpdateMyAccount from './pages/updateMyAccount/updateMyAccount';
import homePage from './auth/home-page/home-page';
import myHistory from './pages/history/history';
import Map from './pages/map/map';


const defaultProtectedRouteProps: ProtectedRouteProps = {
  isAuthenticated: true,
  authenticationPath: '/login',
};

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/home">
                    <homePage.Display />
                </Route>
                <Route exact={true} path="/login">
                    <Login.Display />
                </Route>
                <Route exact={true} path="/register">
                    <Register.Display />
                </Route>
                <Route exact={true} path="/verify-email">
                    <VerifyEmail.Display />
                </Route>
                <Route exact={true} path="/double-auth">
                    <DoubleAuth.Display />
                </Route>
                <Route exact={true} path="/request-password-lost">
                    <RequestPasswordRecovery.Display />
                </Route>
                <Route exact={true} path="/double-auth">
                    <DoubleAuth.Display />
                </Route>
                <Route exact={true} path="/password-lost">
                    <PasswordRecovery.Display />
                </Route>
                <ProtectedRoute {...defaultProtectedRouteProps} exact={true} path='/map' component={Map.Display}/>
                <ProtectedRoute {...defaultProtectedRouteProps} exact={true} path='/my-account' component={Myaccount.Display}/>
                <ProtectedRoute {...defaultProtectedRouteProps} exact={true} path='/update-my-account' component={UpdateMyAccount.Display}/>
                <ProtectedRoute {...defaultProtectedRouteProps} exact={true} path='/history' component={myHistory.Display}/>
                <Route path="*">
                    <homePage.Display />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;