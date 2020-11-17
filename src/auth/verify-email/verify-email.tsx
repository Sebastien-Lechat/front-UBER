import React from 'react';
import styles, { VerifyEmailStyles } from './verify-email-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';


interface P {}
interface S {}

export default class VerifyEmail extends React.PureComponent<P & WithStyles<VerifyEmailStyles>, S> {

    public static Display = withStyles(styles as any)(VerifyEmail) as React.ComponentType<P>
    
    render () {
        const { classes } = this.props;
            return (
            <div className={classes.back + ' ' + classes.center}>
            
            </div>
        );
    }
}

