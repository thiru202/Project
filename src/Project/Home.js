import React from "react";
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
    <div id="home">
      {/* <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" >
      <img src="https://tse3.mm.bing.net/th?id=OIP.8HkIVhVVLSVPfdW_5hRe7QHaEK&pid=Api&P=0&h=180" class="d-block w-100" alt="Loading..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://tse1.mm.bing.net/th?id=OIP.YBuwmbyzXRTquYF7g5hq0QHaEK&pid=Api&P=0&h=180" style={{width:"500px",height:"500px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://tse3.mm.bing.net/th?id=OIP.-F9ljk94XUjPBN2PR6zG-gHaE0&pid=Api&P=0&h=180" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}


<Carousel>
      <Carousel.Item>
      <img className="d-block w-100" src="https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg" alt="load..."/>
        <Carousel.Caption>
          <h3>Tree & Plants</h3>
          <p>Trees and plants are the silent architects of serenity, weaving the tapestry of life with branches of resilience and leaves of renewal</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src="https://media.proprofs.com/images/discuss/user_images/153336/5644394130.jpg"  alt="load..."/>
        <Carousel.Caption>
          <h3>Animals & Nature</h3>
          <p>Animals are the living poetry of nature, each species a verse in the grand symphony of life.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1060&t=st=1705944560~exp=1705945160~hmac=b8573b1fd3cdade7e72cae0fcdf5684f1e049c77775163fe7b2e3a614ec89e23" alt="load..."/>
        <Carousel.Caption>
          <h3>Mountains & Lakes</h3>
          <p>
          Mountains are chapters of an unwritten novel, where nature tells its story in rugged elegance.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://2.bp.blogspot.com/-seBfbaOFQbI/VkxDbCi5lqI/AAAAAAAAwVo/Uoq4TX2qm-E/s1600/Wild-Finches-Birds-(1).jpg" alt="load..."/>
        <Carousel.Caption>
          <h3 className="">Birds</h3>
          <p className="text">
          Birds, nature's winged poets, grace the world with melodies that whisper the secrets of the earth.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="container text-center"> <br></br>
        <h2 className="text-success  ">Life On Land</h2>
        <p className="text-success "> The goal aims to protect, restore, and promote the sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and biodiversity loss.</p>
    </div>
    </div>
  );
}
