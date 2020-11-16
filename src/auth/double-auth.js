import React, { Fragment } from 'react';
import uber from '../assets/img/uber.png';

function DoubleAuth() {
  return (
    <div class = "back-doubleAuth">
        <img src={uber} class="uber" width="300" height="300" />
        <p class = "msg-email">Vous avez reçu un e-mail.</p>
        <p class = "msg-openmail">Ouvrez-le et localisez le code de validation.</p>
        <p class = "msg-codevalidation">Pour vérifier qu'il s'agit bien de votre compte saisissez le <span class >code de validation</span>.</p>
        <div class = "input-pos">
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Your code" />
            </div>
        </div>
        <button class = "btn-connexion"type="button">CONNEXION</button>
    </div>
  );
}

export default DoubleAuth;
