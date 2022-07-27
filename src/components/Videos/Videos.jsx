import React from "react";
import "./Videos.css"
import vid from "./Ye Jism Hai Tou Kya  Ali Azmat  Aesthetics اردو_360p.mp4";
import pos from "../../images/automobile-3230876_640.jpg";
export const Videos = () => {
  return (
    <div>
      <video className="vid" src={vid} poster={pos} controls></video>
    </div>
  );
};
