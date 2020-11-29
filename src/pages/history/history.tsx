import Header from '../../component/header/header';
import React from 'react';
import styles, { historyStyles } from './history-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

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
            <><Header.Display /><div >
            <h1 className={classes.titre}>MON HISTORIQUE DE DÉPLACEMENT</h1>
            <hr className={classes.hr}></hr>
            <Grid container className={classes.container}>

                <Grid className={classes.tableauxHistorique}>
                    <Grid item xs={3} className={classes.tabHistorique}>
                        <Grid className={classes.tabHeader}>
                            <Typography>
                               <a className={classes.libellé}>Date:</a> <a>jj/mm/aaaa&nbsp;</a>
                               <a className={classes.libellé}>Temps de trajet:</a> <a>1 H 15&nbsp;</a><br/>
                                    <hr className={classes.hrTitre}/>
                               <a className={classes.libellé}>Départ:</a> <a>adresse de départ&nbsp;</a><br/>
                               <a className={classes.libellé}>Arrivé:</a> <a>destination</a><br/><br/>
                                
                            </Typography>
                        </Grid>
                        <Grid><br/>
                          <a className={classes.libellé}>Detail du trajet:</a> <p  className={classes.detail}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa</p>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} className={classes.tabHistorique}>
                        <Grid className={classes.tabHeader}>
                            <Typography>
                               <a className={classes.libellé}>Date:</a> <a>jj/mm/aaaa&nbsp;</a>
                               <a className={classes.libellé}>Temps de trajet:</a> <a>1 H 15&nbsp;</a><br/>
                                    <hr className={classes.hrTitre}/>
                               <a className={classes.libellé}>Départ:</a> <a>adresse de départ&nbsp;</a><br/>
                               <a className={classes.libellé}>Arrivé:</a> <a>destination</a><br/><br/>
                                
                            </Typography>
                        </Grid>
                        <Grid><br/>
                          <a className={classes.libellé}>Detail du trajet:</a> <p  className={classes.detail}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa</p>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} className={classes.tabHistorique}>
                        <Grid className={classes.tabHeader}>
                            <Typography>
                               <a className={classes.libellé}>Date:</a> <a>jj/mm/aaaa&nbsp;</a>
                               <a className={classes.libellé}>Temps de trajet:</a> <a>1 H 15&nbsp;</a><br/>
                                    <hr className={classes.hrTitre}/>
                               <a className={classes.libellé}>Départ:</a> <a>adresse de départ&nbsp;</a><br/>
                               <a className={classes.libellé}>Arrivé:</a> <a>destination</a><br/><br/>
                                
                            </Typography>
                        </Grid>
                        <Grid><br/>
                          <a className={classes.libellé}>Detail du trajet:</a> <p  className={classes.detail}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa</p>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} className={classes.tabHistorique}>
                        <Grid className={classes.tabHeader}>
                            <Typography>
                               <a className={classes.libellé}>Date:</a> <a>jj/mm/aaaa&nbsp;</a>
                               <a className={classes.libellé}>Temps de trajet:</a> <a>1 H 15&nbsp;</a><br/>
                                    <hr className={classes.hrTitre}/>
                               <a className={classes.libellé}>Départ:</a> <a>adresse de départ&nbsp;</a><br/>
                               <a className={classes.libellé}>Arrivé:</a> <a>destination</a><br/><br/>
                                
                            </Typography>
                        </Grid>
                        <Grid><br/>
                          <a className={classes.libellé}>Detail du trajet:</a> <p  className={classes.detail}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa</p>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className={classes.tableauxHistorique}>
                    <Grid item xs={3} className={classes.tabHistorique}>
                        <Grid className={classes.tabHeader}>
                            <Typography>
                               <a className={classes.libellé}>Date:</a> <a>jj/mm/aaaa&nbsp;</a>
                               <a className={classes.libellé}>Temps de trajet:</a> <a>1 H 15&nbsp;</a><br/>
                                    <hr className={classes.hrTitre}/>
                               <a className={classes.libellé}>Départ:</a> <a>adresse de départ&nbsp;</a><br/>
                               <a className={classes.libellé}>Arrivé:</a> <a>destination</a><br/><br/>
                                
                            </Typography>
                        </Grid>
                        <Grid><br/>
                          <a className={classes.libellé}>Detail du trajet:</a> <p  className={classes.detail}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa</p>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} className={classes.tabHistorique}>
                        <Grid className={classes.tabHeader}>
                            <Typography>
                               <a className={classes.libellé}>Date:</a> <a>jj/mm/aaaa&nbsp;</a>
                               <a className={classes.libellé}>Temps de trajet:</a> <a>1 H 15&nbsp;</a><br/>
                                    <hr className={classes.hrTitre}/>
                               <a className={classes.libellé}>Départ:</a> <a>adresse de départ&nbsp;</a><br/>
                               <a className={classes.libellé}>Arrivé:</a> <a>destination</a><br/><br/>
                                
                            </Typography>
                        </Grid>
                        <Grid><br/>
                          <a className={classes.libellé}>Detail du trajet:</a> <p  className={classes.detail}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa</p>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} className={classes.tabHistorique}>
                        <Grid className={classes.tabHeader}>
                            <Typography>
                               <a className={classes.libellé}>Date:</a> <a>jj/mm/aaaa&nbsp;</a>
                               <a className={classes.libellé}>Temps de trajet:</a> <a>1 H 15&nbsp;</a><br/>
                                    <hr className={classes.hrTitre}/>
                               <a className={classes.libellé}>Départ:</a> <a>adresse de départ&nbsp;</a><br/>
                               <a className={classes.libellé}>Arrivé:</a> <a>destination</a><br/><br/>
                                
                            </Typography>
                        </Grid>
                        <Grid><br/>
                          <a className={classes.libellé}>Detail du trajet:</a> <p  className={classes.detail}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa</p>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} className={classes.tabHistorique}>
                        <Grid className={classes.tabHeader}>
                            <Typography>
                               <a className={classes.libellé}>Date:</a> <a>jj/mm/aaaa&nbsp;</a>
                               <a className={classes.libellé}>Temps de trajet:</a> <a>1 H 15&nbsp;</a><br/>
                                    <hr className={classes.hrTitre}/>
                               <a className={classes.libellé}>Départ:</a> <a>adresse de départ&nbsp;</a><br/>
                               <a className={classes.libellé}>Arrivé:</a> <a>destination</a><br/><br/>
                                
                            </Typography>
                        </Grid>
                        <Grid><br/>
                          <a className={classes.libellé}>Detail du trajet:</a> <p  className={classes.detail}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa</p>
                        </Grid>
                    </Grid>
                </Grid>

                {/* <Grid>
                    <Container className={classes.containerHistory}>
                        <Typography className={classes.fonttext} gutterBottom variant="h5" component="h2">
                            <ul className={classes.ul}>
                                <li className={classes.li}><a className={classes.libellé}>Date:</a> <a>XXXXXXXX&nbsp;</a></li>
                                <li className={classes.li}><a className={classes.libellé}>Temps de trajet:</a> <a>XXXXXXXX&nbsp;</a></li>
                                <li className={classes.li}><a className={classes.libellé}>Départ:</a> <a>XXXXXXXX&nbsp;</a></li>
                                <li className={classes.li}><a className={classes.libellé}>Arrivé:</a> <a>XXXXXXXX&nbsp;</a></li><br/><br/>
                                <li className={classes.li}>Détails : <a>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&nbsp;</a></li>
                            </ul>
                            
                        </Typography>
                    </Container>
                    <hr className={classes.hr2}></hr>
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
                    <hr className={classes.hr2}></hr>
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
                </Grid> */}
            </Grid>
            </div></>
        );
    }
}

