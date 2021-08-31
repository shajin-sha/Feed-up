import { useState } from "react";
import "./SearchTags.css";

export default function SearchTags(props) {
  const [TagNow, setTagNow] = useState("Photos");
  return (
    <div className="SearchTags">
      <div
        style={{
          backgroundColor: TagNow === "Photos" && "dodgerblue",
        }}
        onClick={() => {
          props.photos();
          setTagNow("Photos");
        }}
      >
        <p>Photos</p>
      </div>
      <div
        style={{
          backgroundColor: TagNow === "People" && "dodgerblue",
        }}
        onClick={() => {
          setTagNow("People");
        }}
      >
        <p>People</p>
      </div>
      <div
        style={{
          backgroundColor: TagNow === "Videos" && "dodgerblue",
        }}
        onClick={() => {
          setTagNow("Videos");
        }}
      >
        <p>Videos</p>
      </div>
      <div
        style={{
          backgroundColor: TagNow === "Live" && "dodgerblue",
        }}
        onClick={() => {
          setTagNow("Live");
        }}
      >
        <p>Live</p>
      </div>
      <div
        style={{
          backgroundColor: TagNow === "Grops" && "dodgerblue",
        }}
        onClick={() => {
          setTagNow("Grops");
        }}
      >
        <p>Grops</p>
      </div>
      <div
        style={{
          backgroundColor: TagNow === "loaction" && "dodgerblue",
        }}
        onClick={() => {
          setTagNow("loaction");
        }}
      >
        <p>loaction</p>
      </div>
    </div>
  );
}
