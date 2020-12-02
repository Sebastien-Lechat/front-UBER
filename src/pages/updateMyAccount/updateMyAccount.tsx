import Header from '../../component/header/header';
import React from 'react';
import avatar from  '../../assets/img/linux-avatar.png';
import succes from  '../../assets/img/8.png';
import styles, { updateMyAccountStyles } from './UpdateMyAccount-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Checkbox from '@material-ui/core/Checkbox';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import DeleteAccount from '@material-ui/icons/DeleteForever';
import Warning from '@material-ui/icons/Warning';

import Fab from '@material-ui/core/Fab';
interface P {}
interface S {}
function Alert(props: AlertProps) {
return <MuiAlert elevation={6} variant="filled" {...props} />;
}   
 export default class UpdateMyAccount extends React.PureComponent<P & WithStyles<updateMyAccountStyles>, S> {

    public static Display = withStyles(styles as any)(UpdateMyAccount) as React.ComponentType<P>
    
    render () {
        const { classes } = this.props;
        return (
            <><Header.Display />
                <div>
                    <h1 className={classes.h1}>MON COMPTE &gt; METTRE A JOUR MON COMPTE</h1>
                        {/* <Grid item xs={4} className={classes.leftSucces}>
                            <Alert className={classes.alert}>
                                Votre compte à bien été mis à jours!
                            </Alert>
                        </Grid> */}
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
                                                <PhotoCamera className={classes.iconCamera}/> &nbsp; Modifier mon avatar &nbsp; &nbsp; 
                                                </Button>
                                            </label>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <form className={classes.form} noValidate autoComplete="off">
                                            <TextField className={classes.formId} id="filled-basic" label="Nom" variant="filled" />
                                            <TextField className={classes.formId} id="filled-basic" label="Email" variant="filled" />
                                            <TextField className={classes.formId} id="filled-basic" label="Nouveau mot de passe" variant="filled" />
                                        </form>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <form className={classes.form} noValidate autoComplete="off">
                                            <TextField className={classes.formId} id="filled-basic" label="Prénom" variant="filled" />
                                            <TextField className={classes.formId} id="filled-basic" label="Téléphone" variant="filled" />
                                            <TextField className={classes.formId} id="filled-basic" label="Confirmez le nouveau mot de passe" variant="filled" />
                                            <Checkbox className={classes.checked}/>
                                        <a className={classes.a}> Activer l'option de double authentification</a> 
                                        </form>
                                    </Grid>
                                </Grid>
                                <br/>
                                <Grid container >
                                    <Grid item xs={4} className={classes.blocBtn}>
                                    
                                     <Button className={classes.btnDeleteAccount} variant="contained" color="primary" component="span">
                                         <DeleteAccount className={classes.iconDeleteAccount} /> &nbsp; Supprimer mon compte
                                    </Button>
                                     
                                    </Grid>
                                    <Grid item xs={8} className={classes.containerBtnvalider} >
                                        <Button  className={classes.btnUpdateUser} variant="contained" color="primary" disableElevation> VALIDER </Button>
                                    </Grid>                         
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>              
                </div></>
        );
    }
}
