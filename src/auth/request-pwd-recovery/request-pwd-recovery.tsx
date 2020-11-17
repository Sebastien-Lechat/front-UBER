import React from 'react';
import styles, { RequestPasswordRecoveryStyles } from './request-pwd-recovery-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';


interface P {}
interface S {}

export default class RequestPasswordRecovery extends React.PureComponent<P & WithStyles<RequestPasswordRecoveryStyles>, S> {

    public static Display = withStyles(styles as any)(RequestPasswordRecovery) as React.ComponentType<P>
    
    render () {
        const { classes } = this.props;
            return (
            <div className={classes.back + ' ' + classes.center}>
            
            </div>
        );
    }
}