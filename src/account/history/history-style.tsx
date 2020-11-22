import { Theme, createStyles } from '@material-ui/core/styles';

export type historyStyles = ("container" |"gridTopUser"|"titre"| "h1" | "h2" | "hr" | "h1" | "containerHistory"
 | "ul" | "input" | "userAvatar" |"li" |'fonttext'); // add class create

// eslint-disable-next-line
export default (theme: Theme) => createStyles<historyStyles, {}>({
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
        marginTop: '40px',
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
    container: {
        backgroundColor:'',
        marginLeft:'10%',
        marginTop: '50px',
        width: '90%'
    },
    h1: {
        paddingTop: '20px',
        color: 'white',
        textAlign: 'center',
    },
    containerHistory: {
        backgroundColor:'black',
        borderRadius: '20px',
        height: '30px',
    },
    ul: {
        listStyle:'none',
        color: 'white',
        fontsize: '20px',
    },
    li:{
        display : 'inline',
        fontsize:'10px',
        paddingBottom: '10px',
    },
    userAvatar:{
        height:'100px', 
        width: '100px',
        borderRadius: '50%'
    }
});
    

