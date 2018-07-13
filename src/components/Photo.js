import React from "react";

const Photo = (props) => {
  return (
    <div className="indiImage">
      <img src={props.image.url} alt={props.image.title}/>
    </div>
  );
}
export default Photo;
