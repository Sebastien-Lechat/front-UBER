import { Theme, createStyles } from '@material-ui/core/styles';

export type myAccountStyles = ("container" | "h2" | "hr" | "right" | "h1" | "left" | "containerUser" | "ul" | "btnUpdateUser" | "input" | "userAvatar"); // add class create

export default (theme: Theme) => createStyles<myAccountStyles, {}>({
    input: {
        display: 'none',
      },
    h2: {
        paddingLeft: '5%',

    },
    hr: {
        border: '5px solid black',
        borderRadius: '5px',
        width: '90%',
    },
    container: {
        marginLeft:'10%',
        marginRight:'10%',
        marginTop: '20px',
        backgroundColor: '',
    },
    right: {
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
        height: '500px',
    },
    ul: {
        listStyle:'none',
        color: 'white',
        fontsize: '20px',
    },
    btnUpdateUser: {
        backgroundColor: 'black',
        borderRadius: '60px',
        width: '60%',
        height: '100px',
        fontSize: '20px',
    },
    userAvatar:{
        height:'100px', 
        width: '100px',
        borderRadius: '50%'
    }


});
    

