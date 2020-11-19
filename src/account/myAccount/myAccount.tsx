import React from 'react';
import avatar from  '../../assets/img/linux-avatar.png';
import styles, { myAccountStyles } from './myAccount-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

interface P {}
interface S {}

export default class MyAccount extends React.PureComponent<P & WithStyles<myAccountStyles>, S> {

    public static Display = withStyles(styles as any)(MyAccount) as React.ComponentType<P>
    
    render () {
        const { classes } = this.props;
            return (
            <div >
            <h2 className={classes.h2}>MON COMPTE</h2>
            <hr className={classes.hr}></hr>
            <Grid container className={classes.container}>
                <Grid item xs={4}>
                    <Container className={classes.containerUser}>
                        <Grid container>
                            <Grid item xs={6}>
                            <img src={avatar} className={classes.userAvatar} alt=""/>
                            <h1 className={classes.h1}>USER NAME</h1>
                            </Grid>
                            <Grid item xs={6}>
                            
                            </Grid>
                    </Grid>
                        
                        <ul className={classes.ul}>
                            <li>Nom: <a>XXXXXXXX</a></li>
                            <li>Prénom <a>XXXXXXXX</a></li>
                            <li>Téléphone <a>XXXXXXXX</a></li>
                            <li>Email</li>
                        </ul>
                    </Container>
                </Grid>
                <Grid item xs={8}>
                    <Button  className={classes.btnUpdateUser} variant="contained" color="primary" disableElevation> Mettre à jours mes informations</Button>
                </Grid>
            </Grid>
            </div>
        );
    }
}
