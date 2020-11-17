import React from 'react';
import './pwd-recovery.css';

const PwdRecovery = () => {
    return (
        <div className="back-pwdRecovery">
            <div className ="row mx-0">
                <div className="col-sm-12 px-0 center">
                    <p className="msg-forgetPwd">J'AI OUBLIÉ MON MOT DE PASSE</p>
                </div>
                <div className="col-sm-12 px-0 center">
                    <form className="input-code">
                        <div className="form-group">
                            <label className="mail-label">Adresse Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Saisissez votre adresse mail obligatoire"/>
                        </div>
                    </form>
                </div>
                <div className="col-sm-12 px-0 center">
                    <button className="btn-send" type="button">ENVOYER</button>
                </div>
                <div className="col-sm-12 px-0 div-link d-flex justify-content-center">
                    <span className="msg-connexion">Vous n'avez pas de compte ?&nbsp;<span className="link-inscription">Inscrivez-vous</span>&nbsp;!</span>
                </div>
            </div>
        </div>
    );
}
export default PwdRecovery;