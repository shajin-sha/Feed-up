import React from "react";
import "./feedImg.css";

export default function FeedImg(props) {
  return (
    <div className="FEEDIMG">
      <img loading="lazy" className="feedImg" src={props.imgsrc} alt="img"/>
    </div>
  );
}
