import React from "react";
import { Link } from "react-router-dom";
export const Service = ({imagelink, heading, info}) => {
  return (
    <div>
      <img
        className="img-thumbnail"
        src={imagelink}
        alt=""
      />

      <h3>{heading}</h3>
      <p>{info}</p>

      <Link to="/" className="link link-warning text-decoration-none">
        LEARN MORE
      </Link>
    </div>
  );
};
