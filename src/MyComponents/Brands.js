import React from "react";
import client1 from "../assets/images/clients/1.png";
import client2 from "../assets/images/clients/2.png";
import client3 from "../assets/images/clients/3.png";
import client4 from "../assets/images/clients/4.png";
import client5 from "../assets/images/clients/5.png";
import client6 from "../assets/images/clients/6.png";
import client7 from "../assets/images/clients/7.png";
import client8 from "../assets/images/clients/8.png";
import client9 from "../assets/images/clients/9.png";
import client10 from "../assets/images/clients/10.png";

const images = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];

const Brands = () => (
  <section className="brands-marquee-stack" id="clients" aria-labelledby="client-logos-title">
    <header className="brands-marquee-heading">
      <span className="product-eyebrow">OUR CLIENTS</span>
      <h2 id="client-logos-title">Trusted by Our Clients</h2>
    </header>
    {[images, [...images].reverse()].map((row, rowIndex) => (
      <div
        className={`brands-marquee${rowIndex === 1 ? " brands-marquee--reverse" : ""}`}
        key={rowIndex}
        aria-hidden={rowIndex === 1 ? "true" : undefined}
      >
        <div className="brands-marquee-track">
          {[0, 1].map((group) => (
            <div className="brands-marquee-group" key={group} aria-hidden={group === 1}>
              {row.map((image, index) => (
                <div className="brands-marquee-item" key={`${rowIndex}-${index}`}>
                  <img
                    src={image}
                    alt={rowIndex === 0 && group === 0 ? `Client ${index + 1} logo` : ""}
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Brands;
