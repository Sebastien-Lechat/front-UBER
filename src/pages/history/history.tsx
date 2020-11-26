import React from 'react';
import styles, { historyStyles } from './history-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


interface P {}
interface S {}

export default class myHistory extends React.PureComponent<P & WithStyles<historyStyles>, S> {

    public static Display = withStyles(styles as any)(myHistory) as React.ComponentType<P>
    
    render () {
        const { classes } = this.props;
            return (
            <div >
            <h1 className={classes.titre}>MON HISTORIQUE DE DÉPLACEMENT</h1>
            <hr className={classes.hr}></hr>
            <Grid container className={classes.container}>
                <Grid>
                    <Container className={classes.containerHistory}>
                        <Typography className={classes.fonttext} gutterBottom variant="h5" component="h2">
                            <ul className={classes.ul}>
                                <li className={classes.li}>Date: <a>XXXXXXXX&nbsp;</a></li>
                                <li className={classes.li}>Temps de trajet: <a>XXXXXXXX&nbsp;</a></li>
                                <li className={classes.li}>Départ: <a>XXXXXXXX&nbsp;</a></li>
                                <li className={classes.li}>Arrivé: <a>XXXXXXXX&nbsp;</a></li>
                                <li className={classes.li}>Détails : <a>XXXXXXXX&nbsp;</a></li>
                            </ul>
                        </Typography>
                    </Container>
                    <hr className={classes.hr}></hr>
                    <Container className={classes.containerHistory}>
                        <Typography className={classes.fonttext} gutterBottom variant="h5" component="h2">
                            <ul className={classes.ul}>
                                <li className={classes.li}>Date: <a>XXXXXXXX&nbsp;</a></li>
                                <li className={classes.li}>Temps de trajet: <a>XXXXXXXX&nbsp;</a></li>
                                <li className={classes.li}>Départ: <a>XXXXXXXX&nbsp;</a></li>
                                <li className={classes.li}>Arrivé: <a>XXXXXXXX&nbsp;</a></li>
                                <li className={classes.li}>Détails : <a>XXXXXXXX&nbsp;</a></li>
                            </ul>
                        </Typography>
                    </Container>
                    <hr className={classes.hr}></hr>
                    <Container className={classes.containerHistory}>
                        <Typography className={classes.fonttext} gutterBottom variant="h5" component="h2">
                            <ul className={classes.ul}>
                                <li className={classes.li}>Date: <a>XXXXXXXX&nbsp;</a></li>
                                <li className={classes.li}>Temps de trajet: <a>XXXXXXXX&nbsp;</a></li>
                                <li className={classes.li}>Départ: <a>XXXXXXXX&nbsp;</a></li>
                                <li className={classes.li}>Arrivé: <a>XXXXXXXX&nbsp;</a></li>
                                <li className={classes.li}>Détails : <a>XXXXXXXX&nbsp;</a></li>
                            </ul>
                        </Typography>
                    </Container>
                </Grid>
            </Grid>
            </div>
        );
    }
}

