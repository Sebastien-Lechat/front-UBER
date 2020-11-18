import React from 'react';
import avatar from  '../../assets/img/linux-avatar.png';
import styles, { updateMyAccountStyles } from './UpdateMyAccount-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Checkbox from '@material-ui/core/Checkbox';
interface P {}
interface S {}

    export default class UpdateMyAccount extends React.PureComponent<P & WithStyles<updateMyAccountStyles>, S> {

    public static Display = withStyles(styles as any)(UpdateMyAccount) as React.ComponentType<P>
    
    render () {
        const { classes } = this.props;
        const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
        
            return (
                <div >
                    <h1 className={classes.h1}>MON COMPTE &gt; METTRE A JOURS MON COMPTE</h1>
                    <hr className={classes.hr}></hr>
                    <Grid container className={classes.container}>
                        <Grid item xs={12}>
                            <Container className={classes.containerUser}>
                                <Grid container>
                                    <Grid item xs={4} className={classes.left}>
                                    
                                    <img src={avatar} className={classes.userAvatar} alt="" />
                                        <input accept="image/*" className={classes.input} id="contained-button-file" multiple type="file" />
                                            <label htmlFor="contained-button-file">
                                                <Button className={classes.btnAvatar} variant="contained" color="primary" component="span">
                                                <PhotoCamera /> &nbsp; Modifier mon avatar
                                                </Button>
                                            </label>
                                    
                                    
                                    </Grid>
                                    <Grid item xs={4}>
                                    <form className={classes.form} noValidate autoComplete="off">
                                        <TextField className={classes.formId} id="filled-basic" label="Nom" variant="filled" />
                                        <TextField className={classes.formId} id="filled-basic" label="Prénom" variant="filled" />
                                        <TextField className={classes.formId} id="filled-basic" label="Téléphone" variant="filled" />
                                    </form>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <form className={classes.form} noValidate autoComplete="off">
                                        <TextField className={classes.formId} id="filled-basic" label="Email" variant="filled" />
                                        <TextField className={classes.formId} id="filled-basic" label="Mot de passe" variant="filled" />
                                        <TextField className={classes.formId} id="filled-basic" label="Mot de passe" variant="filled" />
                                        <Checkbox className={classes.checked}/>
                                    <a className={classes.a}> Activer l'otpion du double authentification</a> 
                                    </form>
                                    
                                    </Grid>
                                    
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                        <Button   className={classes.btnUpdateUser} variant="contained" color="primary" disableElevation> VALIDER</Button>
                    </Grid>
                </div>
        );
    }
}
