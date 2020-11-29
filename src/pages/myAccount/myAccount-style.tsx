import { Theme, createStyles } from '@material-ui/core/styles';

export type myAccountStyles = ("container" |"gridTopUser"|"titre"| "h1" | "h2" |"hr2"| "hr" | "h1" | "left" 
| "containerUser" | "ul" | "btnUpdateUser" | "input" | "userAvatar" |"li" |'fonttext' | "btnContainer"); // add class create

// eslint-disable-next-line
export default (theme: Theme) => createStyles<myAccountStyles, {}>({
    fonttext:{
        color:'white',
    },
    input: {
        display: 'none',
    },
    gridTopUser:{
        marginTop:'10px',
        
    },
    titre: {
        marginTop: '70px',
        paddingLeft: '5%',
    },
    h2:{
        marginBottom:'30px'
    },
    hr: {
        border: '5px solid black',
        color:'black',
        borderRadius: '5px',
        width: '90%',
    },
    hr2:{
        border: '2px solid white',
        color:'white',
        borderRadius: '5px',
        width: '90%',
    },
    container: {
        marginTop: '5vh',
        margin:'auto',
        width: '90%'
    },
    h1: {
        paddingTop: '20px',
        color: 'white',
        textAlign: 'center',
    },
    left: {

    },
    containerUser: {
        backgroundColor:'black',
        borderRadius: '20px',
        padding: '20px'
    },
    ul: {
        listStyle:'none',
        color: 'white',
        fontsize: '20px',
    },
    li:{
        paddingBottom: '10px'
    },
    btnUpdateUser: {
        textAlign:'center',
        backgroundColor: 'black',
        borderRadius: '60px',
        width: '80%',
        height: '100px',
        fontSize: '20px',
        alignItems:'center',
        margin:'auto 0',
        '&:hover' : {
            color: 'black',
            backgroundColor: '#ADADAE'
        },
        '& span' : {
            color: 'white',
        },
        '& a' : {
            color: 'white',
        },
        '& a:hover' : {
            color: 'white',
            textDecoration: 'none'
        },
        // '&:hover' : {
        //     color: '#ADADAE'
        // },
        // '&:hover' : {
        //     color: '#ADADAE'
        // },
    },
    userAvatar:{
        height:'100px', 
        width: '100px',
        borderRadius: '50%'
    },
    btnContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    [theme.breakpoints.down('xl')]: {
        
    },
    [theme.breakpoints.down('lg')]: {
        
    },
    [theme.breakpoints.down('md')]: {
        btnUpdateUser: {
            marginTop: '4vh',
        },
    },
    [theme.breakpoints.down('sm')]: {
        
    },
    [theme.breakpoints.down('xs')]: {
        
    },


});
    

