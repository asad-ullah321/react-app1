import React from 'react'
import { Link } from 'react-router-dom'
import "./Mainimg.css"
export const Mainimg = () => {
  return (
    <div className="jumbotron mainimg">
    <div
      className="color-overlay d-flex flex-column mb-3 justify-content-center align-items-center h-100"
    >
      <h1 className="p-1">AUTOX</h1>

      <p className="p-1">
        Trusted by Millions in Repairing Automobiles Since 1990
      </p>
      <Link to='/' class="btn btn-warning">Register Here</Link>
    </div>
  </div>
  )
}
