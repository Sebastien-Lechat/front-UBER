import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import logo1 from '../../assets/img/1.png';
import logo2 from '../../assets/img/uber.png';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styles, { HeaderBarUpdateMyAccountStyles } from './header-update-my-account-style';

interface P {}
interface S {}

export default class HeaderBarUpdateMyAccount extends React.PureComponent<P & WithStyles<HeaderBarUpdateMyAccountStyles>, S> {

    public static Display = withStyles(styles as any)(HeaderBarUpdateMyAccount) as React.ComponentType<P>
    
    render () {
        const { classes } = this.props;
        return (
          <AppBar position="static">
            <HeaderNavBar>
              <Link to="/map" className={classes.logoDiv + ' ' + classes.center}>
                <img className={classes.logo1} src={logo1} alt=""/>
                <img className={classes.logo2} src={logo2} alt=""/>
              </Link>
              <div className={classes.menu + ' ' + classes.center}>
                <span>
                  <Link to="/my-account">Mon compte</Link>
                </span>
                <span>
                <Link to="/history">Historique</Link>
                </span>
                <span>
                  <Link to="/login">Déconnexion</Link>
                  <LogoutIcon />
                </span>
              </div>
            </HeaderNavBar>
          </AppBar>
        );
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