import React from 'react';
import logo1 from '../../assets/img/1.png';
import logo3 from  '../../assets/img/uber2.png';
import avatarTest from '../../assets/img/avatarTest2.png';
import logout from '../../assets/img/16.png';
import './header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#" id="navbar-brand">
        <span className="cercleBlanc"><br></br><img  src={avatarTest} alt="logo"/>  </span>
        <img className="logoUberCercle"src={logo1} alt="logo"/> 
        <img className="logoUber" src={logo3} alt="logo"/>  
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navDroite" aria-controls="navDroite" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <img className="logoUberMobil" src={logo1} alt="logo"/>  
      <div className="collapse navbar-collapse" id="derniereConnexion" >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item text-center" id="VR"><a className="nav-link" href="#">DERNIÈRE CONNEXION<br></br>JJ/MM/AA</a></li>
        </ul>
      </div>
      <div className="collapse navbar-collapse" id="navDroite" >
        <ul className="navbar-nav text-center">
          <li className="nav-item">
            <a className="nav-link" href="#">HISTORIQUE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">MON COMPTE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">DECONNEXION &nbsp; <img className="imgLogout" src={logout} alt="Déconnexion"/></a>
          </li>  
        </ul>
      </div>
    </nav>
  );
}

export default Header;

