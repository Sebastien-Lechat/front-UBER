import React from 'react';
import logo from '../../assets/img/1.png';
import logo2 from '../../assets/img/uber.png';
import styles, { loginStyles } from './login-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

interface P {}
interface S {}

export default class Login extends React.PureComponent<P & WithStyles<loginStyles>, S> {

    public static Display = withStyles(styles as any)(Login) as React.ComponentType<P>
    
    render () {
        const { classes } = this.props;
            return (
            <div className={classes.back + ' ' + classes.center}>
            <Grid container className={classes.container}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className={classes.leftSide + ' ' + classes.center}>
                    <Grid container>
                        <Grid item xs={12} className={classes.center}>
                            <img className={classes.img} src={logo2} alt=""/>
                        </Grid>
                        <Grid item xs={12} className={classes.center}>
                            <form className={classes.form} noValidate autoComplete="off">
                                <InputEmail id="outlined-basic" label="EMAIL" variant="outlined" />
                                <InputPassword id="outlined-basic" label="PASSWORD" variant="outlined" />
                                <div className={classes.passwordLost}>
                                    <Link to="/request-password-lost" className={classes.link}>Mot de passe oublié ?</Link>
                                </div>
                                <LoginButton>Connexion</LoginButton>
                            </form>
                        </Grid>
                        <Grid item xs={12} className={classes.center}>
                            <span className={classes.subtitle}>Vous n'avez pas encore de compte ? <Link to="/register" className={classes.link}>Rejoignez-nous !</Link></span> 
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={6} xl={6} className={classes.rightSide + ' ' + classes.center}>
                    <img className={classes.img2} src={logo} alt=""/>
                </Grid>
            </Grid>
            </div>
        );
    }
}

const InputEmail = withStyles({
    root: {
        width:'100%',
        marginBottom:'2rem',
        color:'white',
        '& input': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '&:hover label': {
            color: '#ADADAE',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
                borderRadius: '10px',
            },
            '&:hover fieldset': {
            borderColor: '#ADADAE',
            },
            '&.Mui-focused fieldset': {
            borderColor: 'white',
            },
        },
    },
})(TextField);


const InputPassword = withStyles({
    root: {
        width:'100%',
        color:'white',
        '& input': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '&:hover label': {
            color: '#ADADAE',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
                borderRadius: '10px',
            },
            '&:hover fieldset': {
            borderColor: '#ADADAE',
            },
            '&.Mui-focused fieldset': {
            borderColor: 'white',
            },
        },
    },
})(TextField);

const LoginButton = withStyles({
    root: {
        color: 'black',
        backgroundColor:'white',
        marginTop: '2rem',
        border: 'none',
        width: '100%',
        height: '60px',
        fontSize:'25px',
        borderRadius: '10px',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: '#ADADAE',
        },
    },
})(Button);
