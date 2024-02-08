import React from "react";
import BannerYeni from "../asets/banneryeni.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        style={{ backgroundImage: `url(${BannerYeni})` }}
        className="aboutTop"
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quidem
          ea sit? Fuga totam, inventore est suscipit porro vero expedita aliquam
          sapiente, iusto doloremque, voluptatum autem voluptas iste soluta aut?
          Accusantium ad cum facilis tempora voluptatem commodi illum nesciunt
          fugit quae? Quae quos, accusantium error alias natus praesentium!
          Iusto expedita accusantium, reprehenderit rem magnam ullam accusamus
          veniam assumenda nam maxime. Soluta incidunt ullam debitis architecto
          optio tempora rerum doloribus a natus enim libero reiciendis veritatis
          quasi nesciunt ab similique, repudiandae ea voluptatem, odio minus
          obcaecati! Ducimus aliquid ipsa vitae corrupti.
        </p>
      </div>
    </div>
  );
};

export default About;
