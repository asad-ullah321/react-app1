import React from 'react'
import { Container } from 'react-bootstrap'
import "./Standings.css"

export const Info = ({count, info}) => {
  return (
    <div>
        <Container>
        <div className="text-center counts">{count}</div>
            <p className="text-center text-small text-warning">{info}</p>
        </Container>
    </div>
  )
}
