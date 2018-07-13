import React from "react";
import Photo from "./Photo"

const PhotoContainer = (props) => {
  const images = props.images.map((image)=> <Photo image={image} key={image.id} />)
  return (
    <div className="PhotoContainer clearfix">
    {images}
    </div>
  );
}
export default PhotoContainer;
