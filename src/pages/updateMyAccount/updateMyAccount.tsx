import Header from '../../component/header/header';
import React from 'react';
import axios from 'axios';
import avatar from  '../../assets/img/linux-avatar.png';
import succes from  '../../assets/img/8.png';
import styles, { updateMyAccountStyles } from './UpdateMyAccount-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { history } from '../../history';
import { ToastContainer, toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Checkbox from '@material-ui/core/Checkbox';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import DeleteAccount from '@material-ui/icons/DeleteForever';
import Warning from '@material-ui/icons/Warning';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Fab from '@material-ui/core/Fab';
import HeaderBarUpdateMyAccount from '../../component/header/header-update-my-account';
import PasswordRecovery from '../../auth/request-pwd-recovery/request-pwd-recovery';
interface P {}
interface S {
    name: string,
    email: string,
    phone: string,
    doubleAuth: boolean,
    password: string,
    newPassword: string,
    confirmPassword: string
}

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}   
 export default class UpdateMyAccount extends React.PureComponent<P & WithStyles<updateMyAccountStyles>, S> {

    public static Display = withStyles(styles as any)(UpdateMyAccount) as React.ComponentType<P>
    
    public user = JSON.parse(localStorage.getItem('currentUser') as string);
    public phone: string = (this.user.phone) ? this.user.phone : '';
    public doubleAuth: boolean = (this.user.double_authentification) ? this.user.double_authentification : false;
    
    public state: Readonly<S> = {
        name: this.user.name,
        email: this.user.email,
        phone: this.phone,
        doubleAuth: this.doubleAuth,
        password: "",
        newPassword: "",
        confirmPassword: ""
    };
    render () {
        const { classes } = this.props;
        return (
            <><HeaderBarUpdateMyAccount.Display />
                <form noValidate autoComplete="off" onSubmit={this.changeAccount}>
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
                                        <div className={classes.form}>
                                            <TextField className={classes.formId} label="Nom" variant="filled" name='name' value={this.state.name} inputProps={{autoComplete: 'name',form: {autoComplete: 'off',},}} onChange={this.changeVal}/>
                                            <TextField className={classes.formId} label="Téléphone" variant="filled" name='phone' value={this.state.phone} inputProps={{autoComplete: 'phone',form: {autoComplete: 'off',},}} onChange={this.changeVal}/>
                                            <TextField className={classes.formId} type= "password" label= "Nouveau mot de passe" name='newPassword' variant="filled" inputProps={{autoComplete: 'new-password',form: {autoComplete: 'off',},}} onChange={this.changeVal}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className={classes.form}>
                                            {/* <TextField className={classes.formId} label="Prénom" variant="filled" /> */}
                                            <TextField className={classes.formId} label="Email" variant="filled" name='email' value={this.state.email} inputProps={{autoComplete: 'email',form: {autoComplete: 'off',},}} onChange={this.changeVal}/>
                                            <TextField className={classes.formId} type= "password" label="Mot de passe actuel" variant="filled" name='password' inputProps={{autoComplete: 'password',form: {autoComplete: 'off',},}} onChange={this.changeVal}/>
                                            <TextField className={classes.formId} type= "password" label="Confirmer le nouveau mot de passe" variant="filled" name='confirmPassword' inputProps={{autoComplete: 'confirm-password',form: {autoComplete: 'off',},}} onChange={this.changeVal}/>
                                            <Checkbox className={classes.checked} checked={this.state.doubleAuth} name="doubleAuth" onChange={this.doubleAuthChange}/>
                                        <a className={classes.a}>Double authentification</a> 
                                        </div>
                                    </Grid>
                                </Grid>
                                <br/>
                                <Grid container >
                                    <Grid item xs={4} className={classes.blocBtn}>
                                        <Button className={classes.btnDeleteAccount} variant="contained" color="primary" component="span" onClick={this.deleteAccount}>
                                            <DeleteAccount className={classes.iconDeleteAccount}/> &nbsp; Supprimer mon compte
                                        </Button>
                                    </Grid>
                                    <Grid item xs={8} className={classes.containerBtnvalider} >
                                        <Button  className={classes.btnUpdateUser} variant="contained" color="primary" disableElevation type="submit"> VALIDER </Button>
                                    </Grid>                         
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>              
                </form></>
        );
    }

    changeVal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        this.setState({ ...this.state, [name]: value });
    }

    changeAccount = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let data: any = {
            name : this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password.trim(),
            oldPassword : this.state.password.trim(),
            newPassword: this.state.newPassword,
            confirmPassword: this.state.confirmPassword,
        };
        const config: any = {
            method: 'put',
            url: 'http://localhost:3010/api/UBER-EEDSI/account',
            headers: { 
                'Authorization': this.user.token, 
                'Content-Type': 'application/json'
            },
            data : data
        };
        const config2: any = {
            method: 'post',
            url: 'http://localhost:3010/api/UBER-EEDSI/account/change-password',
            headers: { 
                'Authorization': this.user.token, 
                'Content-Type': 'application/json'
            },
            data : data
        };
        if(data.name === '' || data.email === '' || data.password === ''){
            toast.error("Donnée(s) manquante(s)", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        if(data.name !== '' && data.email !== '' && data.password !== '')
        axios(config)
        .then(res => {
            localStorage.setItem('currentUser', JSON.stringify(res.data)); // stock les informations de l'utilisateurs en front
            toast.success("Informations mises à jour avec succès", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        })
        .catch(error => {
            console.log(error.response.data)
        })
        if(data.email !=='' && data.oldPassword !=='' && data.newPassword !=='' && data.confirmPassword !== '' && data.newPassword !== data.confirmPassword){
            toast.error("Les mots de passe ne sont pas identiques", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        if(data.email !=='' && data.oldPassword !=='' && data.newPassword !=='' && data.confirmPassword !== '' && data.newPassword === data.confirmPassword)
        axios(config2)
        .then(res => {
            localStorage.setItem('currentUser', JSON.stringify(res.data)); // stock les informations de l'utilisateurs en front
            toast.success("Mot de passe mis à jour", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        })
        .catch(error => {
            console.log(error.response.data)
        })
        console.log(this.state);
        // faire la requête pour modifier l'utilisateur, sachant que il faut le mot de passe actuel pour effectuer la requête.
    }

    doubleAuthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        this.setState({ ...this.state, [e.target.name]: e.target.checked });
        console.log(this.state.doubleAuth);
        // faire la requête pour activer ou désactiver la double auth.
    }

    deleteAccount = (e:React.MouseEvent,) => {
        e.preventDefault()
        const user = JSON.parse(localStorage.getItem('currentUser') as string)
        const data = {
            email :user.email
        }
        const config: any = {
            method: 'delete',
            url: 'http://localhost:3010/api/UBER-EEDSI/account',
            headers: { 
                'Authorization': user.token, 
                'Content-Type': 'application/json'
            },
            data : data,
        };
        console.log("userToken: "+user.token);
        axios(config)
        .then(() => {
            toast.success("Votre compte a bien été supprimé", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            history.push('/home');
        })
        .catch((error) => {
            toast.warn("Vous n'êtes pas autorisé à effectuer cette requête", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            console.log(error.response);
        });
   
    }

 }