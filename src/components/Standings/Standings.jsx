import React from "react";
import "./Standings.css";
import { Info } from "./Info";
import { Container, Row, Col } from "react-bootstrap";
export const Standings = () => {
  return (
    <div className="standing">
      <Row>
        <Col lg={4}>
        <Container>
          <Info count="3480" info="Happy Customers"></Info>
        </Container>
        </Col>
        <Col lg={4}>
        <Container>
          <Info count="28" info="Years in Buisness"></Info>
        </Container>
        </Col>
        <Col lg={4}>
        <Container>
          <Info count="18" info="Locations"></Info>
        </Container>
        </Col>
      </Row>
    </div>
  );
};
