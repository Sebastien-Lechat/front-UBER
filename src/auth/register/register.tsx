import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/uber.png';
import styles, { registerStyles } from './register-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface P {}
interface S {}

export default class Register extends React.PureComponent<P & WithStyles<registerStyles>, S> {

    public static Display = withStyles(styles as any)(Register) as React.ComponentType<P>
    
    render () {
        const { classes } = this.props;
            return (
            <div className={classes.back + ' ' + classes.center}>
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.mainDiv + ' ' + classes.center}>
                    <Grid container>
                        <Grid item xs={12} className={classes.center}>
                            <img className={classes.img} src={logo} alt=""/>
                        </Grid>
                        <Grid item xs={12} className={classes.center}>
                            <form className={classes.form} noValidate autoComplete="off">
                                <Input id="name" label="NAME" variant="outlined" />
                                <Input id="email" label="EMAIL" variant="outlined" />
                                <Input id="phone" label="PHONE" variant="outlined" />
                                <Input id="password" label="MOT DE PASSE" variant="outlined" />
                                <Input id="confirmPassword" label="CONFIRMER LE MOT DE PASSE" variant="outlined" />
                                <RegisterButton>Inscription</RegisterButton>
                            </form>
                        </Grid>
                        <Grid item xs={12} className={classes.center}>
                            <span className={classes.subtitle}>Vous avez déjà un compte ? <Link to="/login" className={classes.link}>Connexion</Link></span> 
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div>
        );
    }
}

const Input = withStyles({
    root: {
        width:'100%',
        marginBottom:'1.7rem',
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

const RegisterButton = withStyles({
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
