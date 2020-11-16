import logo from './logo.svg';
// import logo1 from './logo1.png';
// import logo3 from './logo3.png';
// import avatarTest from './avatarTest.png';
// import logout from './logout.png';
import './App.css';

function App() {
  return (
    <div className="App">
<nav class="navbar navbar-expand-lg navbar-light white">
  <div class="container"> 

    <a class="navbar-brand" href="#">
    <img src={logo} alt="logo"/>
    
    </a> 

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="basicExampleNav">

      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          {/* <img src={logo3} alt="logo"/> */}
        </li>
        <li class="nav-item">
          {/* <img src={logo1} alt="logo"/> */}
         
        </li>
        <li class="nav-item" class="li-header-gauche3">
          <a class="nav-link waves-effect">Dernière Connexion</a>
        </li>
      </ul>

      
      <ul class="navbar-nav nav-flex-icons">
        <li class="nav-item">
          <a href="https://www.facebook.com/mdbootstrap" class="nav-link waves-effect" target="_blank">
            Mon historique
          </a>
        </li> 
        <li class="nav-item">
          <a href="https://twitter.com/MDBootstrap" class="nav-link waves-effect" target="_blank">
           Mon Compte 
          </a>
        </li>
        <li class="nav-item">
          <a href="https://github.com/mdbootstrap/bootstrap-material-design" class="nav-link waves-effect">
            Deconnexion
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link border border-light rounded waves-effect mr-2" target="_blank">
            <i class="fas fa-envelope mr-1"></i>Logout
            
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default App;
