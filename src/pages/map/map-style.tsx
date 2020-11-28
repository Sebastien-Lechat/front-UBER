import { Theme, createStyles } from '@material-ui/core/styles';
import { isWhiteSpaceLike } from 'typescript';

export type mapStyles = ("parentMap"|"map" | "container" |"container2" |"containerMobilite" | "containerInfoDeplacement"|'fonttext' |"boutonsMonbilite"|"blocVoitureVeloPieton"|"containerPrincipalInput" |"containerInput"|"inputDepart"|"inputDestination"|"iconLocalisation"|"iconSup"|"iconSupParent"|"iconAjoutParent"|"iconAjout"|"ajoutText"|"ajoutTextparent"|"btnValiderItineraire" |
"tempsTrajet" |"tempsTrajetA"|"tempsTrajethms"|"detailBtn"|"detailList"); // add class create

// eslint-disable-next-line
export default (theme: Theme) => createStyles<mapStyles, {}>({
   
   
    fonttext:{
        color:'white',
    },
  
    parentMap:{
        position: 'absolute',
        height: '90vh',
        width: '100vw'
    },

    map:{
        position: 'relative',
        zIndex: 1,
    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        width: '25%',
        position: 'absolute',
        zIndex: 2,
        top: '7vh',
        left: '5vw',
        height: '75vh'
    },
    containerMobilite: {
        backgroundColor:'white',
        borderRadius: '20px',
        height: 'auto',
        width:'100%',
        marginTop:'10px',
        marginLeft:'10px',
        marginRight:'10px',
        marginBottom:'10px',
    },
    boutonsMonbilite:{
        width: '100%',
        height:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '',
    },
    containerInfoDeplacement: {
        backgroundColor:'white',
        borderRadius: '20px',
        marginLeft:'10px',
        marginRight:'10px',
        height: 'auto',
        maxHeight: '65vh',
        width:'100%',
        marginBottom:'10px',
        overflowX: 'auto'
    },
    blocVoitureVeloPieton:{
        width: '100%',
        height:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    containerPrincipalInput:{
        backgroundColor:'',
        width:'100%'
    },
    containerInput:{
        width: '100%', 
        backgroundColor:''
    },
    inputDepart:{
        Width:'100%', 
        marginTop: '10px',

    },
    inputDestination:{
        marginTop: '10px',
        backgroundColor:''
    },
    iconLocalisation:{
        width: '70%',
        height:'70%',
        marginTop:'30%', 
        marginLef: '1px',
        float: 'right',
    },
    
    iconSupParent:{
        width:'30px',
        height:'17px',
        marginTop:'30%',
        marginLef: '1px',
        float: 'left', 
    },
    iconSup:{
        height: '100%',
        width: '100%',
        color:'#E74C3C'
    },
    iconAjoutParent:{
        width:'30px',
        height:'17px',
        marginTop:'30%',
        marginLef: '1px',
        float: 'right',
    },
    iconAjout:{
        height: '100%',
        width: '100%',
        color:''
    },
    ajoutTextparent:{
        marginTop: '20px', 
        paddingLeft:'10px'
    },
    ajoutText:{
     
    },
    btnValiderItineraire: {
        textAlign:'center',
        marginTop: '20px', 
        backgroundColor: 'black',
        borderRadius: '50px',
        width: '80%',
        height: '40px',
        fontSize: '15px',
        alignItems:'center',
        margin:'auto 0'
    },
//    TABLEAU 2

    container2: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        marginLeft:'30%',
        width: '20%',
        position: 'relative',
        zIndex: 2,
        marginTop:'-710px'
    },
    tempsTrajet:{
        marginTop:'15px',
        backgroundColor:'black',
        width:'80%',
        height:'60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tempsTrajetA:{
    
        color:'white',
    },
    tempsTrajethms:{
        color: 'primary',
        fontWeight:'bold',
    },
    detailBtn:{
        color:'black',
        marginTop:'25px'
    },
    detailList:{
        height: '300px',
        marginTop: '20px',
        marginLeft: '5px',
        marginRight: '5px',
        overflow: 'scroll',
        textAlign:'justify',
    },
    [theme.breakpoints.down('xl')]: {
        
    },
    [theme.breakpoints.down('lg')]: {
        
    },
    [theme.breakpoints.down('md')]: {
        container: {
            width: '35%'
        }
    },
    [theme.breakpoints.down('sm')]: {
        container: {
            width: '45%'
        }
    },
    [theme.breakpoints.down('xs')]: {
        
    },
});
    

