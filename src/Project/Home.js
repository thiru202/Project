import React from "react";
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
    <div id="home">
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
