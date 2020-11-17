import React, { Fragment } from 'react';
import uber from '../../assets/img/uber.png';
import './double-auth.css';

function DoubleAuth() {
  return (
    <div className="back-doubleAuth">
      <div className ="row mx-0">
        <div className="col-sm-12 center">
          <img src={uber} className="uber" width="300" height="300" />
        </div>
        <div className="col-sm-12 center">
          <p className="msg-email">Vous avez reçu un e-mail.</p>
        </div>
        <div className="col-sm-12 center">
          <p className="msg-openmail">Ouvrez-le et localisez le code de validation.</p>
        </div>
        <div className="col-sm-12 center">
          <p className="msg-codevalidation">Pour vérifier qu'il s'agit bien de votre compte saisissez le <span className="valcode">code de validation</span>.</p>
        </div>
        <div className="col-sm-12 center">
          <form className="input-code">
              <div className="form-group">
                  <input type="email" className="form-control" placeholder="Your code" />
              </div>
          </form>
        </div>
        <div className="col-sm-12 center">
          <button className="btn-connexion" type="button">CONNEXION</button>
        </div>
      </div>
    </div>
  );
}
export default DoubleAuth;
