import React from "react";
import "./Associations.css";
import { Container, Row, Col } from "react-bootstrap";
import visaimg from "../../images/visa-free-icon-font (1).png";
import netfliximg from "../../images/netflix-free-icon-font.png";
import amzimg from "../../images/cc-amazon-pay-free-icon-font.png";
import stripimg from "../../images/stripe-free-icon-font.png";

export const Associations = () => {
  return (
    <Container class="d-flex flex-column justify-content-center align-items-center Associations">
      <h2 className=" text-center ">Associations</h2>
      <Container>
        <div className="mt-4 d-flex justify-content-center align-items-center row">
          <div className="col-lg-3">
            {" "}
            <img className="icon" src={visaimg} alt="" />{" "}
          </div>
          <div className="col-lg-3">
            {" "}
            <img className="icon" src={amzimg} alt="" />{" "}
          </div>
          <div className="col-lg-3">
            {" "}
            <img className="icon" src={netfliximg} alt="" />
          </div>
          <div className="col-lg-3">
            {" "}
            <img className="icon" src={stripimg} alt="" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="mt-4 d-flex justify-content-center align-items-center row">
          <div className="col-lg-3">
            {" "}
            <img className="icon" src={visaimg} alt="" />{" "}
          </div>
          <div className="col-lg-3">
            {" "}
            <img className="icon" src={amzimg} alt="" />{" "}
          </div>
          <div className="col-lg-3">
            {" "}
            <img className="icon" src={netfliximg} alt="" />
          </div>
          <div className="col-lg-3">
            {" "}
            <img className="icon" src={stripimg} alt="" />
          </div>
        </div>
      </Container>
    </Container>
  );
};
