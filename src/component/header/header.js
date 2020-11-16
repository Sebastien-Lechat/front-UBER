import logo1 from '../../assets/img/1.png';
import logo3 from  '../../assets/img/uber2.png';
import avatarTest from '../../assets/img/avatarTest2.png';
import logout from '../../assets/img/16.png';
import './header.css';

function Header() {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#" id="navbar-brand">
    <span class="cercleBlanc"><br></br><img  src={avatarTest} alt="logo"/>  </span>
     <img class="logoUberCercle"src={logo1} alt="logo"/> 
     <img class="logoUber" src={logo3} alt="logo"/>  
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navDroite" aria-controls="navDroite" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <img class="logoUberMobil" src={logo1} alt="logo"/>  
  <div class="collapse navbar-collapse" id="derniereConnexion" >
    <ul class="navbar-nav mr-auto">
      <li class="nav-item text-center" id="VR"><a class="nav-link" href="#">DERNIÈRE CONNEXION<br></br>JJ/MM/AA</a></li>
    </ul>
  </div>
  <div class="collapse navbar-collapse" id="navDroite" >
    <ul class="navbar-nav text-center">
      <li class="nav-item">
        <a class="nav-link" href="#">HISTORIQUE</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">MON COMPTE</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">DECONNEXION &nbsp; <img class="imgLogout" src={logout} alt="Déconnexion"/></a>
      </li>  
    </ul>
  </div>
</nav>
  );
}

export default Header;

