import { Theme, createStyles } from '@material-ui/core/styles';

export type updateMyAccountStyles = ("container" | "h1" |"left" | "hr" |"containerUser" | "center" |
 "btnAvatar" |"btnUpdateUser" | "input" | "userAvatar"|"form" | "formId" | "checked" |"a" | "alert" | "leftSucces"|"succesIcone"); // add class create

// eslint-disable-next-line
export default (theme: Theme) => createStyles<updateMyAccountStyles, {}>({
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        display: 'none',
      },
    h1: {
        marginTop: '70px',
        paddingLeft: '5%',
    },
    hr: {
        border: '5px solid black',
        color:'black',
        borderRadius: '5px',
        width: '90%',
    },
    container: {
        marginTop: '5vh',
        margin:'auto',
        width: '90%'
    },

    containerUser: {
        paddingTop:'100px',
        backgroundColor:'black',
        borderRadius: '20px',
        paddingBottom:'80px',
        
    },
   left:{
       backgroundColor:'',
       paddingLeft:'40px'
      
   },
   btnAvatar:{
       marginTop: '20px',
       backgroundColor:'#008ab6',
   },
//    &:hover btnAvatar: {
//     color: '#ADADAE',
// },
   btnUpdateUser: {
        textAlign:'center',
        backgroundColor: 'black',
        borderRadius: '60px',
        width: '60%',
        height: '75px',
        fontSize: '20px',
        alignItems:'center',
        margin:'auto',
        marginTop:'4vh',
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
    },
    userAvatar:{
        height:'200px', 
        width: '200px',
        borderRadius: '50%',
    },
    form:{
        
        backgroundColor:'black',
        color: 'white',
    },
    formId:{
        width:'90%',
        marginBottom: '20px',
        backgroundColor:'white',
        color: 'white',
    },
    checked:{
        // backgroundColor:'white',
        color:'white'
    },
    a:{
        textDecoration:'underline'

    },
    alert: {
        marginTop: '40px',
        float:'left',
        width:'85%',
        marginRight: '5%',
        // marginTop: '10px',
        // marginLeft: '10%',
        // marginRight: '10%',

    },
    leftSucces: {
        // backgroundColor:'orange',
        // marginRight:'10%',
    },
    succesIcone:{
        height:'40px',
        marginRight:'10px'
    },
    [theme.breakpoints.down('xl')]: {
        
    },
    [theme.breakpoints.down('lg')]: {
        img: {
            width: '375px'
        },
    },
    [theme.breakpoints.down('md')]: {
        rightSide: {
            display: 'none',
        },
        img: {
            width: '350px'
        },
    },
    [theme.breakpoints.down('sm')]: {
        form: {
            width: '70%',
        },
        img: {
            width: '325px'
        },
    },
    [theme.breakpoints.down('xs')]: {
        form: {
            width: '80%',
        },
        img: {
            width: '300px'
        },
    },
});
    

