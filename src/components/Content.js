import './App.css';
import a1 from './img/a1.jpg';
import a2 from './img/a2.jpg';
import a3 from './img/a3.jpg';
import a4 from './img/a4.jpg';
import a5 from './img/a5.jpg';
import a6 from './img/a6.jpg';
import b1 from './img/b1.jpg';
import b2 from './img/b2.jpg';
import b3 from './img/b3.jpg';
import b4 from './img/b4.jpg';
import b5 from './img/b5.jpg';
import b6 from './img/b6.jpg';
import b7 from './img/b7.jpg';
import c1 from './img/c1.jpg';
import c2 from './img/c2.jpg';
import c3 from './img/c3.jpg';
import c4 from './img/c4.jpg';
import c5 from './img/c5.jpg';
import c6 from './img/c6.jpg';
import d1 from './img/d1.jpg';
import d2 from './img/d2.jpg';
import d3 from './img/d3.jpg';
import d4 from './img/d4.jpg';
import d5 from './img/d5.jpg';
import d6 from './img/d6.jpg';
import e1 from './img/e1.jpg';
import e2 from './img/e2.jpg';
import e3 from './img/e3.jpg';
import e4 from './img/e4.jpg';
import e5 from './img/e5.jpg';
import e6 from './img/e6.jpg';
import card1 from './img/card1.jpg';
import card2 from './img/card2.jpg';
import card3 from './img/card3.jpg';
import bg from './img/background.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Content() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 1400, min: 1000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1000, min: 883 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 883, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
};
    return (
      <div className="body-contant">
        <div className="list-1 space">
      <div className="container d-grid gap-2 d-md-flex h4 pb-2">
      <button className="btn btan rounded-0" type="button">Featured</button>
      <button className="btn btan rounded-0" type="button">Movies</button>
      <button className="btn btan rounded-0" type="button">Shows</button>
      </div>
      <div className="container owl-carousel-1 text-white">
      <Carousel responsive={responsive}>
      <div><div class="carousel"><img src={a1} className="images"/><div className="d-flex justify-content-start p-2"><b>IRON DOOR</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={a2} className="images"/><div className="d-flex justify-content-start p-2"><b>THE EARTH</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={a3} className="images"/><div className="d-flex justify-content-start p-2"><b>CITY DREAMS</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={a4} className="images"/><div className="d-flex justify-content-start p-2"><b>DIVINE HAND</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={a5} className="images"/><div className="d-flex justify-content-start p-2"><b>DECEIVED</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={a6} className="images"/><div className="d-flex justify-content-start p-2"><b>HEAVEN IS NOW</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      </Carousel>
      </div>
        </div>
      <div className="list-2 space">
      <div className="container owl-carousel-2 text-white">
      <div class="h4 pb-2">
        <h2><b>PAPULAR MOVIES</b></h2>
        <div className="bord"></div>
      </div>
      <Carousel responsive={responsive}>
      <div><div class="carousel"><img src={b1} className="images"/><div className="d-flex justify-content-start p-2"><b>TERRIFYING NIGHT</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={b2} className="images"/><div className="d-flex justify-content-start p-2"><b>THE WINTER</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={b3} className="images"/><div className="d-flex justify-content-start p-2"><b>THE FEAR</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={b4} className="images"/><div className="d-flex justify-content-start p-2"><b>THE LOVE</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={b5} className="images"/><div className="d-flex justify-content-start p-2"><b>THE LAND OF FEAR</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={b6} className="images"/><div className="d-flex justify-content-start p-2"><b>CRIMINAL</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={b7} className="images"/><div className="d-flex justify-content-start p-2"><b>THE THUG</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      </Carousel>
      </div>
      </div>
      <div className="3-cards space">
      <div class="container h4 pb-2 text-white">
        <h2><b>TOP 10 BOX OFFICE</b></h2>
        <div className="bord"></div>
      </div>
      <div class="container-fluid">
       <div class="row">
       <div class="col-4">
       <div class="text-bg-dark">
         <div className="banner-card-1">
         <div class="banner-card-text">
         <h5 class="title-card">Card title</h5>
         <p class="text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         <p class="text"><small>Last updated 3 mins ago</small></p>
        </div>
        </div>
       </div> 
       </div>
       <div class="col-4">
       <div class="text-bg-dark">
         <div className="banner-card-2">
         <div class="banner-card-text">
         <h5 class="title-card">Card title</h5>
         <p class="text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         <p class="text"><small>Last updated 3 mins ago</small></p>
        </div>
        </div>
       </div>
       </div>
       <div class="col-4">
       <div class="text-bg-dark">
         <div className="banner-card-3">
         <div class="banner-card-text">
         <h5 class="title-card">Card title</h5>
         <p class="text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         <p class="text"><small>Last updated 3 mins ago</small></p>
        </div>
       </div>
       </div>
       </div>
       </div>
       </div>
      </div>
      <div className="list-3 space">
      <div className="container owl-carousel-3 text-white">
      <div class="h4 pb-2">
        <h2><b>TRENDING NOW</b></h2>
        <div className="bord">
        </div>
      </div>
      <Carousel responsive={responsive}>
      <div><div class="carousel"><img src={c1} className="images"/><div className="d-flex justify-content-start p-2"><b>FREEDOM</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={c2} className="images"/><div className="d-flex justify-content-start p-2"><b>THE WORLD</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={c3} className="images"/><div className="d-flex justify-content-start p-2"><b>THE GANG</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={c4} className="images"/><div className="d-flex justify-content-start p-2"><b>WORLD OF WAR</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={c5} className="images"/><div className="d-flex justify-content-start p-2"><b>HAPPY HOLIDAY</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={c6} className="images"/><div className="d-flex justify-content-start p-2"><b>WEEKEND</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      </Carousel>
      </div>
      </div>
      <div className="list-4 space">
      <div class="background-carousel text-center">
        <div class="bg-img d-p">
        <div class="bg-text">
        <div className="container owl-carousel-4 text-white">
        <h4><b>featured</b></h4>
       <p className="h1 pb-2">
        Best Series
       </p>
       <p className="pb-2">
        News Season 5 Just flown in Watch and debate.
       </p>
       <div className="gap-2 pb-5">
       <button className="btn btan rounded-0" type="button">Drama</button>
       <button className="btn btan rounded-0" type="button">Action</button>
       <button className="btn btan rounded-0" type="button">Romance</button>
       </div>
       <Carousel responsive={responsive}>
       <div><div class="carousel"><img src={d2} className="images"/><div className="d-flex justify-content-start p-2"><b>A HAPPY LIFE</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">4 Season</div></div></div></div>
       <div><div class="carousel"><img src={d3} className="images"/><div className="d-flex justify-content-start p-2"><b>A MIRAGE</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">4 Season</div></div></div></div>
       <div><div class="carousel"><img src={d4} className="images"/><div className="d-flex justify-content-start p-2"><b>BOX</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">4 Season</div></div></div></div>
       <div><div class="carousel"><img src={d5} className="images"/><div className="d-flex justify-content-start p-2"><b>THE PRICE</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">4 Season</div></div></div></div>
       <div><div class="carousel"><img src={d6} className="images"/><div className="d-flex justify-content-start p-2"><b>SAND</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">4 Season</div></div></div></div>
       <div><div class="carousel"><img src={d1} className="images"/><div className="d-flex justify-content-start p-2"><b>THE SKY</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">4 Season</div></div></div></div>
       <div><div class="carousel"><img src={d2} className="images"/><div className="d-flex justify-content-start p-2"><b>A HAPPY LIFE</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">4 Season</div></div></div></div>
       </Carousel>
      </div>
        </div>
       </div>
      </div>
      </div>
      <div className="list-5 space">
      <div className="container owl-carousel-5 text-white">
      <div class="h4 pb-2">
        <h2><b>SUGGESTED FOR YOU</b></h2>
        <div className="bord"></div>
      </div>
      <Carousel responsive={responsive}>
      <div><div class="carousel"><img src={e1} className="images"/><div className="d-flex justify-content-start p-2"><b>THE SKY</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={e2} className="images"/><div className="d-flex justify-content-start p-2"><b>THE SKY</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={e3} className="images"/><div className="d-flex justify-content-start p-2"><b>THE SKY</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={e4} className="images"/><div className="d-flex justify-content-start p-2"><b>THE SKY</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={e6} className="images"/><div className="d-flex justify-content-start p-2"><b>THE SKY</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      <div><div class="carousel"><img src={e5} className="images"/><div className="d-flex justify-content-start p-2"><b>THE SKY</b></div><div className="d-flex justify-content-start"><div className="px-1">2024</div><div className="px-1">+18</div><div className="px-1">Action</div></div></div></div>
      </Carousel>
      </div>
      </div>
      </div>
    );
}

export default Content;
