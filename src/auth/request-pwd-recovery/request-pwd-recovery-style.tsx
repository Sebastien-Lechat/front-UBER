import { Theme, createStyles } from '@material-ui/core/styles';

export type RequestPasswordRecoveryStyles = ("center" | "back" ); // add class create

export default (theme: Theme) => createStyles<RequestPasswordRecoveryStyles, {}>({
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    back: {
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
    }
});
    

