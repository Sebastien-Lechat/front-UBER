import React from 'react';
import logo from '../../assets/img/uber.png';
import styles, { doubleAuthStyles } from './double-auth-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface P {}
interface S {}

export default class DoubleAuth extends React.PureComponent<P & WithStyles<doubleAuthStyles>, S> {

    public static Display = withStyles(styles as any)(DoubleAuth) as React.ComponentType<P>
    
    render () {
        const { classes } = this.props;
        const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
            return (
            <div className={classes.back + ' ' + classes.center}>
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.mainDiv + ' ' + classes.center}>
                    <Grid container>
                        <Grid item xs={12} className={classes.center}>
                            <img className={classes.img} src={logo} alt=""/>
                        </Grid>
                        <Grid item xs={12} className={classes.center}>
                            <span className={classes.text}>La double authentification est activé sur votre compte.</span>
                        </Grid>
                        <Grid item xs={12} className={classes.center}>
                            <span className={classes.text}>Nous vous avons envoyé un mail avec le code de validation.</span> 
                        </Grid>
                        <Grid item xs={12} className={classes.center}>
                            <span className={classes.text}>Pour vérifier qu'il s'agit bien de votre compte. <span>Saisissez le code de validation</span></span> 
                        </Grid>
                        <Grid item xs={12} className={classes.center}>
                            <form className={classes.form} noValidate autoComplete="off">
                                <Input id="code" label="CODE" variant="outlined" />
                                <DoubleAuthButton>Connexion</DoubleAuthButton>
                            </form>
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
        marginTop:'4rem',
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

const DoubleAuthButton = withStyles({
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
