import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles, { headerBarStyles } from './header-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import logo1 from '../../assets/img/1.png';
import logo2 from '../../assets/img/uber.png';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { history } from '../../history';

interface P {}
interface S {}

export default class HeaderBar extends React.PureComponent<P & WithStyles<headerBarStyles>, S> {

    public static Display = withStyles(styles as any)(HeaderBar) as React.ComponentType<P>
    
    render () {
        const { classes } = this.props;
        return (
          <AppBar position="static">
            <HeaderNavBar>
              <div className={classes.avatar + ' ' + classes.center}>
                <div className={classes.img}></div>
              </div>
              <Link to="/map" className={classes.logoDiv + ' ' + classes.center}>
                <img className={classes.logo1} src={logo1} alt=""/>
                <img className={classes.logo2} src={logo2} alt=""/>
              </Link>
              <div className={classes.menu + ' ' + classes.center}>
                <span>
                  <Link className={classes.pointer} to="/my-account">Mon compte</Link>
                </span>
                <span>
                <Link className={classes.pointer} to="/history">Historique</Link>
                </span>
                <span className={classes.pointer} onClick={this.logout}>
                  Déconnexion
                  <LogoutIcon />
                </span>
              </div>
            </HeaderNavBar>
          </AppBar>
        );
    }
  logout = (e:React.MouseEvent) => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('currentUser') as string)
    console.log(user)
    const config: any = {
      method: 'post',
      url: 'http://localhost:3010/api/UBER-EEDSI/account/disconnect',
      headers: { 
        'Authorization': user.token
      }
    };
    axios(config)
    .then(function (response) {
      localStorage.removeItem('currentUser');
      history.push('/login')
    })
    .catch(function (error) {
      console.log(error);
    });
  } 
}

const HeaderNavBar = withStyles({
  root: {
      backgroundColor: 'black',
      height: '10vh',
      paddingLeft: '0',
  },
})(Toolbar);

const LogoutIcon = withStyles({
  root: {
    width: '30px',
    height: '30px',
    marginLeft: '5px'
  },
})(ExitToAppIcon);