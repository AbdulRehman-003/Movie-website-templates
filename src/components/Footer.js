import React from 'react';
import img1 from './img/logo-1.png';

function Footer() {
    return (
    <div className="footer text-white">
       <div className="container-fluid pt-5 pb-5 bg-dark bg-opacity-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-12 bottom-logo-sec">
            <div className="column">
              <div className="row">
                <div className="bottom-logo-sec">
                <img src={img1} className="bottom-logo" alt="png"/>
                </div>
                <p className="opacity-25">Here,write the complete address of the Registered office address along with telephone number.</p>
                </div>
              <div className="row">
                <div className="col">
                <i class="fa-brands color fa-twitter p-2"></i>
                <i class="fa-brands color fa-facebook-f p-2"></i>
                <i class="fa-brands color fa-instagram p-2"></i>
                <i class="fa-brands color fa-youtube p-2"></i>
                </div>
              </div>
              </div>
              </div>
            <div className="col-lg-3 col-sm-12 align-self-center">
            <div className="column">
              <p className="fw-bolder bord-footer">DISPLAY TYPE</p>
              <p className="footer-text">Action</p>
              <p className="footer-text">Comedy</p>
              <p className="footer-text">Drama</p>
              <p className="footer-text">Horror</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 align-self-center">
            <div className="column">
              <p className="fw-bolder bord-footer">PRODUCTION</p>
              <p className="footer-text">2018 Year</p>
              <p className="footer-text">2019 Year</p>
              <p className="footer-text">2020 Year</p>
              <p className="footer-text">2021 year</p>
              </div>
              </div>
            <div className="col-lg-3 col-sm-12 align-self-center">
            <div className="column">
            <p className="fw-bolder bord-footer">DISPLAY QUALITY</p>
              <p className="footer-text">720p HDTV</p>
              <p className="footer-text">1080p BluRay</p>
              <p className="footer-text">720p BluRay</p>
              <p className="footer-text">1080p WEB-DL</p>
              </div>
            </div>
          </div>
        </div>
        </div>
         <nav className="bg-black">
         <div className="container">
         <div class="d-flex">
         <div class="p-2 flex-grow-1"><p>Copyright 2024, All Rights Reserved</p></div>
         <div class="p-2"><p>Terms of Service</p></div>
         <div class="p-2"><p>Privacy policy</p></div>
          </div>
        </div>
       </nav> 
    </div>
    );
}

export default Footer;
