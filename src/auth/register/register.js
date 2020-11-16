import React from 'react';
import logo2 from '../../assets/img/uber.png';
import './register.css';

const Register = () => {
    return (
        <div className="back-black">
            <div className="row mx-0">
                <div className="col-sm-12 px-0 center">
                    <img src={logo2} alt="" className="title-img"/>
                </div>
                <div className="col-sm-12 px-0 center">
                    <form id="register" className="login-form">
                        <div className="form-group">
                            <label className="login-label">Nom</label>
                            <input type="text" className="form-control" id="name"  placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <label className="login-label">Adresse Email</label>
                            <input type="email" className="form-control" id="email"  placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label className="login-label">Téléphone</label>
                            <input type="text" className="form-control" id="phone"  placeholder="Téléphone"/>
                        </div>
                        <div className="form-group">
                            <label className="login-label">Mot de passe :</label>
                            <input type="password" className="form-control" id="password"  placeholder="Mot de passe"/>
                        </div>
                        <div className="form-group">
                            <label className="login-label">Confirmer le mot de passe :</label>
                            <input type="password" className="form-control" id="confirmPassword"  placeholder="Confirmer le mot de passe"/>
                        </div>
                        <button type="submit" className="btn login-btn">M'inscrire</button>
                        <div className="col-sm-12 px-0 div-link d-flex justify-content-center">
                            <span className="login-label">Vous avez déjà un compte ?&nbsp;<span className="link">Connexion</span></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
