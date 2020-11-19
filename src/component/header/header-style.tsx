import { Theme, createStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';
import avatar from '../../assets/img/linux-avatar.png';

export type headerBarStyles = ("h100" | "avatar" | "menu" | "center" | "img" | "logo1" | "logo2" | "logoDiv"); // add class create

export default (theme: Theme) => createStyles<headerBarStyles, {}>({
    h100: {
        height:'12vh',
    },
    center : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    avatar: {
        background: 'white',
        borderRadius: '50%',
        width: '140px',
        height: '140px',
        border: '1px solid #00000050',
        marginTop: '5vh',
    },
    img: {
        backgroundImage: `url(${avatar})`,
        width: '140px',
        height: '140px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',   
        borderRadius: '50%',
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
            marginLeft: '45px',
            textDecoration: 'none'
        },
        '& span a:hover' : {
            color: 'white',
            fontSize: '22px',
            marginLeft: '45px',
            textDecoration: 'none'
        }
    }
});
    

