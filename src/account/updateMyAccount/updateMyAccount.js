import React from 'react';
import './updateMyAccount.css';
import avatarTest from '../../assets/img/avatarTest2.png';
import btnEnvoyé from '../../assets/img/8.png';
import Header from '../../component/header/header';

const UpdateMyAccount = () => {
    return (
        <div class="divMonCompte" ><br></br>
         <h2><b>MON COMPTE | METRE A JOURS MON COMPTE</b></h2>
         <hr class="hr"/>
        
         <div class="alert alert-success" role="alert"> <img id="btnEnvoye" src={btnEnvoyé} alt="logo"/> &nbsp; Votre compte à bien été mis à jours</div>
         <div class="row">
             <div class="col-lg-12">
                <div id="infoUtilisateur">
                <div class="row" id="avatarNomUser">
                     <div class="col-lg-2">
                        <span class="cercleBlanc"><br></br><img  src={avatarTest} alt="logo"/>  </span>
                        <input type="file" id="avatar" class="btn btn-outline-light" name="avatar" accept="image/png, image/jpeg"></input>
                        {/* <!-- Upload image input--> */}
            
                     </div>
                     <div class="col-lg-5" id="user"> <br></br>
                        <input class="form-control form-control-sm" type="text" placeholder="Nom"/> <br></br>
                        <input class="form-control form-control-sm" type="text" placeholder="Prénom"/><br></br>
                        <input class="form-control form-control-sm" type="tel" placeholder="Téléphone"/>
                     </div>
                     <div class="col-lg-5" id="user"> <br></br>
                        <input class="form-control form-control-sm" type="email" placeholder="Email"/> <br></br>
                        <input class="form-control form-control-sm" type="password" placeholder="Mot de passe"/><br></br>
                        <input class="form-control form-control-sm" type="password" placeholder="Retappez votre mot de passe"/>
                    </div>
                </div>
            </div>
         </div>
            
    </div>
    </div>

       
       
      );
}

export default UpdateMyAccount;