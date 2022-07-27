import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SerPrices = ({service, info, info2, price}) => {
  return (
    <div>
      <Row>
        <Col lg={8}>
          <div className="flex-column">
            <h3>{service}</h3>
            <p>
              {info}
            </p>
            <p className="text-small">
              {info2}
            </p>
          </div>
        </Col>
        <Col lg={1}></Col>
        <Col lg={3}>
          <div className="flex-column">
            <p className="fs-1">
              {price} <span>\hr</span>
            </p>
            <p>start from</p>
            <Link to="/" className="link-primary text-decoration-none">
              Book an appointment
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};
