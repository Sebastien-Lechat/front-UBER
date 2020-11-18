import React from 'react';
import logo from '../../assets/img/uber.png';
import avatar from  '../../assets/img/linux-avatar.png';
import styles, { myAccountStyles } from './myAccount-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import FaceIcon from '@material-ui/icons/Face';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface P {}
interface S {}

export default class MyAccount extends React.PureComponent<P & WithStyles<myAccountStyles>, S> {

    public static Display = withStyles(styles as any)(MyAccount) as React.ComponentType<P>
    
    render () {
        const { classes } = this.props;
        const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
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
