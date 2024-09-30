import React from 'react';
import './App.css';
import img from './img/logo.png';


function Navbar() {
    return (
    <div className="header">
    <nav className="navbar navbar-expand-lg fixed-top bg-black bg-opacity-75">
     <div className="container-fluid">
      <img src={img} width="120" height="50"/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 gap-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active text-white bord-nav" aria-current="page" href="#"><b className="color">HOME</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white bord-nav" href="#"><b className="color">MOVIE</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white bord-nav" href="#"><b className="color">SHOES</b></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link active text-white bord-nav dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b className="color">PAGES</b>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active text-white" href="#"><b><i class="fa-solid fa-magnifying-glass color"></i></b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white" href="#"><i class="fa-regular fa-bell color"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white" href="#"><i class="fa-solid fa-gear color"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white" href="#"><b><i class="fa-regular fa-user color"></i></b></a>
          </li>
          <li className="nav-item nav-link active">
          <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label text-white" for="flexSwitchCheckDefault">Dark mode</label>
         </div>
         </li>
        </ul>
        </form>
      </div>
     </div>
    </nav>
    </div>  
    );
}

export default Navbar;
