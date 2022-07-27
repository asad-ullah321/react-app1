import "./Contactinfo.css";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

export const Contactinfo = ({imgsrc}) => {
  return (
    <div className="jumbotron lastjmg">
      <div className="color-overlay d-flex flex-column mb-3 justify-content-center align-items-center h-100">
        <p className="p-1 fs-3">Full Service Auto Shop</p>

        <h1 className="p-1">Satisfaction Guaranteed</h1>
        <img src={imgsrc} alt="" />

        <p className="p-1 fs-3">Call us today</p>
        <Link to="/" className="p-1 fs-1 fw-bolder text-decoration-none number" 
          >+880 111 222 3333
        </Link>
        <br />
        
        <Link to="/" className="btn btn-warning text-white">BOOK AN APPOINTMENT ONLINE</Link>
      </div>
    </div>
  );
};
