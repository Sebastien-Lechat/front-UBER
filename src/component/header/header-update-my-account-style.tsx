import { Theme, createStyles } from '@material-ui/core/styles';

export type HeaderBarUpdateMyAccountStyles = ( "menu" | "center" | "logo1" | "logo2" | "logoDiv"); // add class create

// eslint-disable-next-line
export default (theme: Theme) => createStyles<HeaderBarUpdateMyAccountStyles, {}>({
    center : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    logoDiv : {
        marginLeft: '25px',
    },
    logo1 : {
        width: '65px',
        height: '65px',
    },
    logo2 : {
        marginLeft: '25px',
        marginTop: '-5px',
        width: '225px',
        height: '225px',
    },
    menu: {
        width: '-webkit-fill-available',
        marginLeft: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '& span' : {
            color: 'white',
            fontSize: '22px',
            marginLeft: '45px',
        },
        '& span a' : {
            color: 'white',
            fontSize: '22px',
            textDecoration: 'none'
        },
        '& span a:hover' : {
            color: '#ADADAE',
            fontSize: '22px',
            textDecoration: 'none'
        }
    }
});
    

