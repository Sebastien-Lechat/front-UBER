import React, { Fragment } from 'react';
import uber from '../../assets/img/uber.png';
import './double-auth.css';

function DoubleAuth() {
  return (
    <div className="back-doubleAuth">
        <img src={uber} className="uber" width="300" height="300" />
        <p className="msg-email">Vous avez reçu un e-mail.</p>
        <p className="msg-openmail">Ouvrez-le et localisez le code de validation.</p>
        <p className="msg-codevalidation">Pour vérifier qu'il s'agit bien de votre compte saisissez le <span className="valcode">code de validation</span>.</p>
        <div className="input-pos">
            <div classNameName="form-group">
                <input type="email" classNameName="form-control" placeholder="Your code" />
            </div>
        </div>
        <button className="btn-connexion" type="button">CONNEXION</button>
    </div>
  );
}

export default DoubleAuth;
