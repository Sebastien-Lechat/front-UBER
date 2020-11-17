import React from 'react';
import logo from '../../assets/img/1.png';
import logo2 from '../../assets/img/uber.png';
import './login.css';

const Login = () => {
    return (
        <div className="back-black">
            <div className="row mx-0">
                <div className="col-sm-12 col-md-12 col-lg-6 left-side px-0">
                    <div className="col-sm-12 px-0 center">
                        <img src={logo2} alt="" className="title-img-login"/>
                    </div>
                    <div className="col-sm-12 px-0 center">
                        <form id="login" className="login-form">
                            <div className="form-group">
                                <label className="login-label">Adresse Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Email"/>
                            </div>
                            <div className="form-group">
                            <span className="label-with-link">
                                <label className="label">Mot de passe :</label>
                                <a className="center">Mot de passe oublié ?</a>
                            </span>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
                            </div>
                            <button type="submit" className="btn login-btn">Connexion</button>
                            <div className="col-sm-12 px-0 div-link d-flex justify-content-center">
                                <span className="login-label">Vous n'avez pas encore de compte ?&nbsp;<span className="link">Inscription</span></span>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 rigth-side px-0 center">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;