import "./Services.css";
import React from "react";
import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import CarIcon from "./car-mechanic-free-icon-font.png";
import { Link } from "react-router-dom";

const ServiceSection = (props) => {
  return (
    <div>
      <section className="MainSections">
        <Row>
          <Col lg={4}>
            <img src={props.imgsrc} className="img-fluid" />
          </Col>
          <Col lg={6}>
            <Container className="py-5">
              <h1>In & Out In Record Time</h1>
              <p>
                Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
                Curabitur blandit tempus porttitor. Donec id elit non mi porta
                gravida at eget metus.Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Cras justo odio dapibus ac
                facilisis in, egestas eget quam.
              </p>
              <Row>
                <Col lg={6}>
                  <span class="serviceHeading">
                    <img src={CarIcon} alt="" />
                    On Site Experts & Services
                  </span>

                  <p>
                    Donec ullamcorper nulla non metus auctor fringilla. Cras
                    justo odio dapibus ac
                  </p>
                  <Link className="link link-primary text-decoration-none" to="/">
                    Learn More
                  </Link>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </section>
      <section className="MainSections2">
        <Row>
          <Col lg={7}>
            <Container className="py-5">
              <h1>A smart Workshop To Repair Your Car When Necessary</h1>
              <p>
                Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
                Curabitur blandit tempus porttitor. Donec id elit non mi porta
                gravida at eget metus. Cum sociis natoque penatibus et magnis
                dis parturient montes nascetur ridiculus mus.
              </p>
              <p class="">
              Donec id elit non mi porta gravida at eget metus. Cum sociis
              natoque penatibus et magnis dis parturient montes nascetur
              ridiculus mus.
            </p>
            <Link to="form" className="btn btn-warning bg-lg text-decoration-none"
              >BOOK AN APPOINTMENT</Link
            >
            </Container>
          </Col>
          <Col lg={5}>
            <img src={props.imgsrc} className="img-fluid" />
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default ServiceSection;
