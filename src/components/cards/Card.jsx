import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div id="card">
      <img src={props.url} alt={props.title} />
      <div id="card-title">{props.title}</div>
      <div id="card-description">{props.description}</div>
    </div>
  );
}
