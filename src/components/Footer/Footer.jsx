import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import fbimg from "../../images/facebook-free-icon-font.png"
import twiimg from "../../images/twitter-free-icon-font.png"
import instaimg from "../../images/instagram-free-icon-font.png"

import "./Footer.css"
export const Footer = () => {
  return (
    <div className="footer py-2 d-flex justify-content-center align-items-center footercustom">
      <Container className="d-flex justify-content-center align-items-center py-2">
        <Row>
          <Col lg={6}>
            <Container>
              Designed by Elegant Themes | Powered by WordPress
            </Container>
          </Col>
          <Col lg={6} className="d-flex justify-content-center align-items-center">
            <Link className="me-3" to="/"><img src={fbimg}
          /></Link>
          <Link className="me-3" to="/"><img src={twiimg}
          /></Link>
          <Link className="me-3" to="/"><img src={instaimg}
          /></Link>

          </Col>
        </Row>
      </Container>
    </div>
  );
};
