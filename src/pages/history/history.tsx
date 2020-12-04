import Header from '../../component/header/header';
import React from 'react';
import axios from 'axios';
import styles, { historyStyles } from './history-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

interface P {}
interface S {
    history : Array<Object>,
    hasGetHistory: boolean,
}

export default class myHistory extends React.PureComponent<P & WithStyles<historyStyles>, S> {

    public static Display = withStyles(styles as any)(myHistory) as React.ComponentType<P>

    public state: Readonly<S> = { history: [{}], hasGetHistory: false }

    render () {
        this.getHistory()
        const { classes } = this.props;
        const { history } = this.state;
            return (
            <><Header.Display />  
            <div>
                <h1 className={classes.titre}>MON HISTORIQUE DE DÉPLACEMENT</h1>
                <hr className={classes.hr}></hr>
                <Grid container spacing={5} className={classes.container}>
                    { history.map((item: any) => {
                            item.date = new Date(item.createdAt).toLocaleString();
                            return (
                                <Grid item xs={4}>
                                    <div className={classes.tabHistorique}>
                                        <Grid className={classes.tabHeader}>
                                            <div>
                                                <span className={classes.libellé}>Date:</span>&nbsp;<span>{ item.date }</span><br/>
                                                <span className={classes.libellé}>Temps de trajet:</span> <span>XXHXX</span><br/>
                                                    <hr className={classes.hrTitre}/>
                                                <span className={classes.libellé}>Départ:</span> <span>{item.departure_location}</span><br/>
                                                <span className={classes.libellé}>Arrivé:</span> <span>{item.arrival_location}</span><br/><br/>
                                            </div>
                                        </Grid>
                                        <Grid><br/>
                                            <span className={classes.libellé}>Detail du trajet:</span> <p  className={classes.detail}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex explicabo laborum eius ut error odio illum animi accusamus porro. Deserunt sit voluptate enim officia amet vel animi reprehenderit culpa</p>
                                        </Grid>
                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div></>
        );
    }

    getHistory () {
        if (!this.state.hasGetHistory) {
            this.setState({hasGetHistory: true} as Pick<S, keyof S>);
            const user = JSON.parse(localStorage.getItem('currentUser') as string);
            const config: any = {
                method: 'get',
                url: 'http://localhost:3010/api/UBER-EEDSI/history',
                headers: { 
                'Authorization': user.token
                }
            };
            axios(config)
            .then((response) => {
                this.setState({history: response.data.histories} as Pick<S, keyof S>);
            })
            .catch((error) => {
                console.log(error);
            });
        }   
    }
}

