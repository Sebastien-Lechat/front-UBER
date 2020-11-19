import React from 'react';
import './myAccount.css';
import avatarTest from '../../assets/img/avatarTest2.png';
import Header from '../../component/header/header';

const MyAccount = () => {
    return (
        <div class="divMonCompte" >
         <h1><b>MON COMPTE</b></h1>
         <hr class="hr"/>

         <div class="row">
             <div class="col-lg-6">
                <div id="infoUtilisateur">
                <div class="row" id="avatarNomUser">
                     <div class="col-lg-4"><img id="avatar" src={avatarTest} alt="logo"/></div>
                     <div class="col-lg-8" id="user"> <br></br><h2><b>USER NAME</b></h2></div>
                 </div>
                 <br></br>
                 <ul id="listeInfo" class="text-center">
                     <li><a>Nom: XXXXXXXX </a></li>
                     <li><a>Prénom: XXXXXXXX </a></li>
                     <li><a>Téléphone: XXXXXXXX </a></li>
                     <li><a>Email: XXXXXXXX </a></li>
                 </ul>
                </div>
             </div>
             <div class="col-lg-6" id="parentBtnMaj">
             <button id="btnMAJ" type="button" class="btn rounded-pill btn-dark">Mettre à jours mes<br class="br"></br> informations</button>
            </div>
         </div>
        </div>
       
      );
}

export default MyAccount;