import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Comment } from "./Comment";
import { useState } from "react";
import { useSelector } from 'react-redux/es/exports';


export const Feedback = () => {
  const amount = useSelector(state=>state.rating)

  
  return (
    <div>
      <Container className="d-flex py-5 flex-column justify-content-center align-items-center feedback">
        <h1>Happy Customers</h1>
        <Container>
          <Row>
           
            {amount.map((c) =>(<Col lg={6}><Comment key={c.id} index={c.id}></Comment>
            </Col>))}
            
          </Row>
          <hr/>
        </Container>
      </Container>
    </div>
  );
};
