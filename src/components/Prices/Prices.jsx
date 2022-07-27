import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SerPrices } from "./SerPrices";

export const Prices = () => {
  return (
    <Container>
      <div className="py-5 d-flex flex-column justify-content-left align-items-left">
        <div className="text-large">
          <h1>Our Prices</h1>
        </div>
        <hr />
        <SerPrices
          service="Collision Repairs"
          info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              doloremque numquam illo inventore quo dolores?"
          info2="Nullam / Nibh ultricies / Vehicula / Praesent / Scelerisque /
              Consectetur et"
          price="400"
        ></SerPrices>
        <hr />
        <SerPrices
          service="Smog Check & Oil Repairs"
          info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              doloremque numquam illo inventore quo dolores?"
          info2="Nullam / Nibh ultricies / Vehicula / Praesent / Scelerisque /
              Consectetur et"
          price="400"
        ></SerPrices>
        <hr />
        <SerPrices
          service="Tire Services"
          info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              doloremque numquam illo inventore quo dolores?"
          info2="Nullam / Nibh ultricies / Vehicula / Praesent / Scelerisque /
              Consectetur et"
          price="400"
        ></SerPrices>
        <hr />
        <SerPrices
          service="Engine Services"
          info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              doloremque numquam illo inventore quo dolores?"
          info2="Nullam / Nibh ultricies / Vehicula / Praesent / Scelerisque /
              Consectetur et"
          price="400"
        ></SerPrices>
        <hr />
        
      </div>
    </Container>
  );
};
