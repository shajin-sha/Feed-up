import { useState } from "react";
import "./SearchTags.css";

export default function SearchTags(props) {
  const [TagNow, setTagNow] = useState("Photos");
  return (
    <div style={{
    display:props.dis  === "none" ? "none" :"flex"
    }} className="SearchTags">
      <div
        style={{
          backgroundColor: TagNow === "Photos" && "dodgerblue",
          color: TagNow === "Photos" ? 'white' : "#1f1f1f75",
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
          color: TagNow === "People" ? 'white' : "#1f1f1f75",
        }}
        onClick={() => {
          props.People()
          setTagNow("People");

        }}
      >
        <p>People</p>
      </div>
      <div
        style={{
          backgroundColor: TagNow === "Videos" && "dodgerblue",
          color: TagNow === "Videos" ? 'white' : "#1f1f1f75",
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
          color: TagNow === "Live" ? 'white' : "#1f1f1f75",
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
          color: TagNow === "Grops" ? 'white' : "#1f1f1f75",
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
          color: TagNow === "loaction" ? 'white' : "#1f1f1f75",
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
