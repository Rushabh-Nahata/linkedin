import React from "react";
import "../Middle/middle.css"
import "./Post/post.css";

const IconProps = ({image,text,alt}) => {
  return (
    <div>
    
        <div className="middle-share-icon-box">
          <div className="middle-share-icon-box-image">
            <img src={image} alt={alt} />
          </div>
          <div className="middle-share-icon-box-description">
            <h5>{text}</h5>
          </div>
        </div>
      </div>
  );
};

export default IconProps;
