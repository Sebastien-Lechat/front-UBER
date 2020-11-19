import { Theme, createStyles } from '@material-ui/core/styles';

export type loginStyles = ("center" | "form" | "back" | "leftSide" | "img"| "img2" | "rightSide" | "container"
| "link" | "subtitle" | "passwordLost"); // add class create

// eslint-disable-next-line
export default (theme: Theme) => createStyles<loginStyles, {}>({
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    back: {
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
    },
    form: {
        width: '50%', // Fix IE 11 issue.
        marginTop: '-2rem',
        textAlign:'center'
    },
    leftSide: {
        height: '100vh',
        borderRight: '1px solid white'
    },
    img: {
        marginTop: '-7rem',
        width: '400px'
    },
    img2: {
        width: '400px'
    },
    rightSide: {    
        height: '100vh',
    },
    container: {
        height: '100vh',
    },
    link: {
        color: 'white',
        textDecoration: 'underline',
        '&:hover' : {
            color: '#ADADAE'
        }
    },
    subtitle: {
        color: 'white',
        marginTop: '4rem',
    },
    passwordLost: {
        marginTop: '0.5rem',
        textAlign: 'right',
    }
});
    

