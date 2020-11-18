import React from 'react';
import logo from '../../assets/img/uber.png';
import styles, { myAccountStyles } from './myAccount-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

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
            <Grid container >
                <Grid item xs={12} className={classes.container}>
                   
                        <Grid item xs={6} className={classes.right}>
                            <Container className={classes.containerUser}>
                                <h1 className={classes.h1}>USER NAME</h1>
                                <ul className={classes.ul}>
                                    <li>Nom: <a>XXXXXXXX</a></li>
                                    <li>Prénom <a>XXXXXXXX</a></li>
                                    <li>Téléphone <a>XXXXXXXX</a></li>
                                    <li>Email</li>
                                </ul>
                            </Container>
                        </Grid>
                        <Grid item xs={6} className={classes.left}>
                           
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
