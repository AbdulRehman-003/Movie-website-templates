import React from 'react';
import car1 from './img/caro 2.jpg';
import car2 from './img/caro 1.jpg';
import car3 from './img/caro 3.jpg';

function Carousel() {
    return(
    <div className="carousel section">
      <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
     </div>
     <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={car1} className="d-block w-100 opacity-75" alt="jpeg"/>
      <div className="carousel-caption end-50">
        <div className="row">
          <div className="col p-2">
            <button type="button" className="btn btn-sm btn-warning">New</button>
          </div>
          <div className="row p-2">
            <div className="col"><p className="fs-1"><b>60 MINUTES</b></p></div>
          </div>
          <div className="row p-2">
            <div className="col-2"><p>2021</p></div>
            <div className="col-2"><button type="button" className="btn btn-sm btn-outline-danger text-white">+18</button></div>
            <div className="col-2"><p>2h 6m</p></div>
          </div>
          <div className="row p-2">
            <div className="col"><p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur explicabo inventore nesciunt minima esse cum doloribus aperiam, nam id ullam, dolorem maiores et, reprehenderit sed. Porro officiis voluptate illum. Et.</p></div>
          </div>
          <div className="row p-2">
            <div className="col">
            <div class="d-inline p-2"><button type="button" class="btn btn-lg btan rounded-0"><i className="fa-solid fa-play"></i><small> Play Now</small></button></div>
            <div class="d-inline p-2"><button type="button" class="btn btn-lg btan rounded-0"><b>+</b><small> My List</small></button></div>
            </div>
           </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={car2} className="d-block w-100 opacity-75" alt="jpeg"/>
      <div className="carousel-caption end-50">
        <div className="row">
          <div className="col p-2">
            <button type="button" className="btn btn-sm btn-warning">New</button>
          </div>
          <div className="row p-2">
            <div className="col"><p className="fs-1"><b>The wages of Fear</b></p></div>
          </div>
          <div className="row p-2">
            <div className="col-2"><p>2021</p></div>
            <div className="col-2"><button type="button" className="btn btn-sm btn-outline-danger text-white">+18</button></div>
            <div className="col-2"><p>2h 6m</p></div>
          </div>
          <div className="row p-2">
            <div className="col"><p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur explicabo inventore nesciunt minima esse cum doloribus aperiam, nam id ullam, dolorem maiores et, reprehenderit sed. Porro officiis voluptate illum. Et.</p></div>
          </div>
          <div className="row p-2">
            <div className="col">
            <div class="d-inline p-2"><button type="button" class="btn btn-lg btan rounded-0"><i className="fa-solid fa-play"></i><small> Play Now</small></button></div>
            <div class="d-inline p-2"><button type="button" class="btn btn-lg btan rounded-0"><b>+</b><small> My List</small></button></div>
            </div>
           </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={car3} className="d-block w-100 opacity-75" alt="jpeg"/>
      <div className="carousel-caption end-50">
        <div className="row">
          <div className="col p-2">
            <button type="button" className="btn btn-sm btn-warning">New</button>
          </div>
          <div className="row p-2">
            <div className="col"><p className="fs-1"><b>The Wages of Fear</b></p></div>
          </div>
          <div className="row p-2">
            <div className="col-2"><p>2021</p></div>
            <div className="col-2"><button type="button" className="btn btn-sm btn-outline-danger text-white">+18</button></div>
            <div className="col-2"><p>2h 6m</p></div>
          </div>
          <div className="row p-2">
            <div className="col"><p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur explicabo inventore nesciunt minima esse cum doloribus aperiam, nam id ullam, dolorem maiores et, reprehenderit sed. Porro officiis voluptate illum. Et.</p></div>
          </div>
          <div className="row p-2">
            <div className="col">
            <div class="d-inline p-2"><button type="button" class="btn btn-lg btan rounded-0"><i className="fa-solid fa-play"></i><small> Play Now</small></button></div>
            <div class="d-inline p-2"><button type="button" class="btn btn-lg btan rounded-0"><b>+</b><small> My List</small></button></div>
            </div>
           </div>
        </div>
      </div>
    </div>
     </div>
     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
     </button>
     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
     </button>
      </div>
    </div>
    );
}
export default Carousel;