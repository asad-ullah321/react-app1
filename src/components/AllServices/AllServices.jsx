import "./AllServices.css";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Service } from "./Service";

export const AllServices = () => {
  return (
    <div className="mainContainer">
      <Container className="text-center ">
        <h1 className="py-2 text-center">Automotive Services</h1>
        <p>
          Donec id elit non mi porta gravida at egeum sociis natoque penatibus
          et magnis dis
        </p>
        <Row >
          <Col lg={4}>
            <div className="ser">
              <Service
                imagelink="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/04/car_repair_shop-05.jpg"
                heading="Tire Fills & Replacements"
                info="Cras ultricies ligula sed magna dictum portarta."
              ></Service>
            </div>
          </Col>
          <Col lg={4}>
            <div className="ser">
              <Service
                imagelink="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/04/car_repair_shop-04.jpg"
                heading="Oil Change & Smog Test"
                info="Cras ultricies ligula sed magna dictum portarta."
              ></Service>
            </div >
          </Col>
          <Col lg={4}>
            <div className="ser">
              <Service
                imagelink="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/04/car_repair_shop-05.jpg"
                heading="Inspections & Tune Ups"
                info="Cras ultricies ligula sed magna dictum portarta."
              ></Service>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AllServices;
