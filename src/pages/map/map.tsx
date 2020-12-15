import Header from '../../component/header/header';
import React from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

import styles, { mapStyles } from './map-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import Iframe from 'react-iframe';
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

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
lat: 48.891304837789455,
lng: 2.2840817276289553
};

interface P {}
interface S {
    response: any,
    travelMode: any,
    origin: any,
    destination: any,
    waypoints: Array<google.maps.DirectionsWaypoint>; 
    alreadyShowMap: boolean;
}

export default class Map extends React.PureComponent<P & WithStyles<mapStyles>, S> {

    constructor (props: any) {
        super(props)
    
        this.directionsCallback = this.directionsCallback.bind(this)
        this.checkDriving = this.checkDriving.bind(this)
        this.checkBicycling = this.checkBicycling.bind(this)
        this.checkTransit = this.checkTransit.bind(this)
        this.checkWalking = this.checkWalking.bind(this)
        this.getOrigin = this.getOrigin.bind(this)
        this.getDestination = this.getDestination.bind(this)
        this.onClick = this.onClick.bind(this)
        this.onMapClick = this.onMapClick.bind(this)
    }

    public static Display = withStyles(styles as any)(Map) as React.ComponentType<P>
    public origin: any;
    public destination: any;
    public keyGoogle = (process.env.KEY_GOOGLE as string);

    public state: Readonly<S> = { 
        response: null,
        travelMode: 'DRIVING',
        origin: 'Paris',
        destination: 'Savigny sur orge' ,
        alreadyShowMap: false,
        waypoints: [{
            location: 'Morsang sur orge',
            stopover: true
        }]
    }

    render () {
        const { classes } = this.props;
        return (
            <><Header.Display />
                <div className={classes.parentMap}>
                    <LoadScript googleMapsApiKey="AIzaSyCS033ffJtFO9HFWywz2tHbnEyNho-a-w0">
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
                        { /* Child components, such as markers, info windows, etc. */ }
                        {
                            (
                                this.state.destination !== '' &&
                                this.state.origin !== '' && !this.state.alreadyShowMap
                            ) && (
                                <DirectionsService
                                // required
                                options={{ 
                                    destination: this.state.destination,
                                    origin: this.state.origin,
                                    travelMode: this.state.travelMode,
                                    optimizeWaypoints: true,
                                    waypoints: this.state.waypoints
                                }}
                                // required
                                callback={this.directionsCallback}
                                // optional
                                onLoad={directionsService => {
                                    // console.log('DirectionsService onLoad directionsService: ', directionsService)
                                }}
                                // optional
                                onUnmount={directionsService => {
                                    // console.log('DirectionsService onUnmount directionsService: ', directionsService)
                                }}
                                />
                            )
                            }

                            {
                            this.state.response !== null && (
                                <DirectionsRenderer
                                // required
                                options={{ 
                                    directions: this.state.response
                                }}
                                // optional
                                onLoad={directionsRenderer => {
                                    console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                                }}
                                // optional
                                onUnmount={directionsRenderer => {
                                    console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                                }}
                                />
                            )
                            }
                        <></>
                        </GoogleMap>
                    </LoadScript>
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
                                    <Grid item xs={8} className={classes.ajoutTextparent}>
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

    directionsCallback (response: any) {
        console.log(response)
        this.setState(
            () => ({
                alreadyShowMap: true,
            })
        )
        if (response !== null) {
            if (response.status === 'OK') {
            this.setState(
                () => ({
                response
                })
            )
            } else {
            console.log('response: ', response)
            }
        }
    }

    checkDriving ({ target: { checked } }: any) {
        checked &&
        this.setState(
            () => ({
                travelMode: 'DRIVING'
            })
        )
    }

    checkBicycling ({ target: { checked } }: any) {
    checked &&
        this.setState(
        () => ({
            travelMode: 'BICYCLING'
        })
        )
    }

    checkTransit ({ target: { checked } }: any) {
    checked &&
        this.setState(
        () => ({
            travelMode: 'TRANSIT'
        })
        )
    }

    checkWalking ({ target: { checked } }: any) {
    checked &&
        this.setState(
        () => ({
            travelMode: 'WALKING'
        })
        )
    }

    getOrigin (ref: any) {
        this.origin = ref
    }

    getDestination (ref: any) {
        this.destination = ref
    }

    onClick () {
    if (this.origin.value !== '' && this.destination.value !== '') {
        this.setState(
        () => ({
            origin: this.origin.value,
            destination: this.destination.value
        })
        )
    }
    }

    onMapClick (...args: any[]) {
    console.log('onClick args: ', args)
    }
}
