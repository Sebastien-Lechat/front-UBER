import { Theme, createStyles } from '@material-ui/core/styles';

export type VerifyEmailStyles = ("center" | "back" ); // add class create

export default (theme: Theme) => createStyles<VerifyEmailStyles, {}>({
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
    

