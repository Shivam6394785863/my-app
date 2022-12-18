import React from "react";
import "./index.css"

function Data(props) {
  return (
    <>
      <div className="main">
        <img className="image" src={props.data.img} alt="no image" />
          <h2>{props.data.name}</h2>
          <h3>color: {props.data.color}</h3>
        <div className="under">
          <h3>Price: {props.data.price}</h3>
          <h3>Size: {props.data.size}</h3>
        </div>
        <p>
        {props.data.description}
        </p>
      </div>
    </>
  );
}

export default Data
