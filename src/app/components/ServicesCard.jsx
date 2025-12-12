"use client";
import React, { useEffect, useState } from "react";
import "../base/card.css";
import firstServiceImage from "../../../public/assets/firstServiceImage.jpg";
import secondServiceImage from "../../../public/assets/secondServiceImage.jpg";
import thirdServiceImage from "../../../public/assets/thirdServiceImage.jpg";
import forthServiceImage from "../../../public/assets/forthServiceImage.jpg";
import fifthServiceImage from "../../../public/assets/fifthServiceImage.jpg";
import sixthServiceImage from "../../../public/assets/sixthServiceImage.jpg";

function ServicesCard() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/services?populate=*")
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);

  return (
    <div class="cardContainer">
      {services.map((d) => {
        return (
          <div class="container" key={d.id}>
            <div class="canvas">
              <div class="tracker tr-1"></div>
              <div class="tracker tr-2"></div>
              <div class="tracker tr-3"></div>
              <div class="tracker tr-4"></div>
              <div class="tracker tr-5"></div>
              <div class="tracker tr-6"></div>
              <div class="tracker tr-7"></div>
              <div class="tracker tr-8"></div>
              <div class="tracker tr-9"></div>
              <div class="tracker tr-10"></div>
              <div class="tracker tr-11"></div>
              <div class="tracker tr-12"></div>
              <div class="tracker tr-13"></div>
              <div class="tracker tr-14"></div>
              <div class="tracker tr-15"></div>
              <div class="tracker tr-16"></div>
              <div class="tracker tr-17"></div>
              <div class="tracker tr-18"></div>
              <div class="tracker tr-19"></div>
              <div class="tracker tr-20"></div>
              <div class="tracker tr-21"></div>
              <div class="tracker tr-22"></div>
              <div class="tracker tr-23"></div>
              <div class="tracker tr-24"></div>
              <div class="tracker tr-25"></div>
              <div id="card">
                <img
                  alt={d.title}
                  src={`http://localhost:1337${d.image.url}`}
                  width={1000}
                  height={230}
                  class="img"
                />
                <h1>{d.title}</h1>
                <p>{d.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ServicesCard;
