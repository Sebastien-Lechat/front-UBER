import Header from '../../component/header/header';
import React from 'react';

import styles, { mapStyles } from './map-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Iframe from 'react-iframe';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Velo from '@material-ui/icons/DirectionsBike';
import Voiture from '@material-ui/icons/DriveEta';
import Apied from '@material-ui/icons/EmojiPeople';
import AjouterIco from '@material-ui/icons/AddCircleOutline';
import SupprimerIco from '@material-ui/icons/HighlightOff';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import LocalisationIco from '@material-ui/icons/Room';

import Typography from '@material-ui/core/Typography';

interface P {}
interface S {}

export default class Map extends React.PureComponent<P & WithStyles<mapStyles>, S> {

    public static Display = withStyles(styles as any)(Map) as React.ComponentType<P>
    
    render () {
        const { classes } = this.props;
        return (
            <><Header.Display />
                <div className={classes.parentMap}>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.26385935044!2d2.281957415732015!3d48.89130837929074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f65519599ab%3A0x648913b6b58c1316!2sIMIE%20Paris!5e0!3m2!1sfr!2sfr!4v1606261522299!5m2!1sfr!2sfr"
                        width="100%"
                        height="100%"
                        className="map" />
                    <Grid container className={classes.container}>
                        <Container className={classes.containerMobilite}>
                            <Grid container className={classes.boutonsMonbilite}>
                                <Grid item xs={4} className={classes.blocVoitureVeloPieton}>
                                    <Fab color="primary" aria-label="add">
                                        <Voiture fontSize="large" />
                                    </Fab>
                                </Grid>
                                <Grid item xs={4} className={classes.blocVoitureVeloPieton}>
                                    <Fab color="default" aria-label="add">
                                        <Velo fontSize="large" />
                                    </Fab>
                                </Grid>
                                <Grid item xs={4} className={classes.blocVoitureVeloPieton}>
                                    <Fab color="default" aria-label="add">
                                        <Apied fontSize="large" />
                                    </Fab>
                                </Grid>
                            </Grid>
                        </Container>
                        <Container className={classes.containerInfoDeplacement}>
                            <Grid container>
                                <Grid className={classes.containerPrincipalInput}>
                                    <Grid container className={classes.containerInput}>
                                        <Grid item xs={2}>
                                            <LocalisationIco className={classes.iconLocalisation} />
                                        </Grid>
                                        <Grid item xs={8}>
                                            <form noValidate autoComplete="off">
                                                <TextField id="filled-size-small" className={classes.inputDepart} size="small" label="Adresse de départ" variant="filled" />
                                            </form>
                                        </Grid>
                                        <Grid item xs={2}>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={2}>
                                        <LocalisationIco className={classes.iconLocalisation} />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <form noValidate autoComplete="off">
                                            <TextField id="filled-size-small" className={classes.inputDestination} size="small" label="Déstination 1" variant="filled" />
                                        </form>
                                    </Grid>
                                    <Grid item xs={2}>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={2}>
                                        <LocalisationIco className={classes.iconLocalisation} />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <form noValidate autoComplete="off">
                                            <TextField id="filled-size-small" className={classes.inputDestination} size="small" label="Déstination 2" variant="filled" />
                                        </form>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Fab color="default" className={classes.iconSupParent}>
                                            <SupprimerIco className={classes.iconSup} />
                                        </Fab>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={2}>
                                        <Fab color="default" className={classes.iconAjoutParent}>
                                            <AjouterIco className={classes.iconAjout} />
                                        </Fab>
                                    </Grid>
                                    <Grid item xs={10} className={classes.ajoutTextparent}>
                                        <a href="#" className={classes.ajoutText}>Ajouter une Destination</a>
                                    </Grid>
                                </Grid>
                                <Grid container justify="center" alignItems="center">
                                    <Button className={classes.btnValiderItineraire} variant="contained" color="primary" disableElevation> Valider l'itinéraire</Button>
                                </Grid>

                                <Grid container justify="center" alignItems="center">
                                    <div className={classes.tempsTrajet}>

                                        <Typography className={classes.fonttext}>
                                            <a className={classes.tempsTrajetA}>Temps éstimé: </a><a color="primary.main" className={classes.tempsTrajethms}> 1 H 15 min</a>
                                        </Typography>
                                    </div>

                                </Grid>
                                <Grid container justify="center" alignItems="center">
                                    <a className={classes.detailBtn} href="#"> DETAIL DE L'ITINERAIRE &#9660;</a>
                                </Grid>

                                <Grid container justify="center" alignItems="center">
                                    <p className={classes.detailList}>
                                                                               Lorem ipsum dolor sit amet, consectetur adipisicing elit.Assumenda aliquam commodi accusantium eum.Fugiat,
                                              Doloremque sint vel assumenda?Distinctio quis officia corrupti modi esse repudiandae aliquid vitae ex?Iure.
                                                      sit amet, consectetur adipisicing elit.Assumenda aliquam commodi accusantium eum.Fugiat,
                                        voluptate?Doloremque sint vel assumenda?Distinctio quis officia corrupti modi esse repudiandae aliquid vitae ex?Iure.
                                    </p>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </div></>
        );
    }
}
