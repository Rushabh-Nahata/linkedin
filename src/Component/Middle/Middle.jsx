import React, { useEffect, useState } from "react";
import "./middle.css";
import boy from "../../images/boy.png";
import photo from "../../images/picture.png";
import event from "../../images/event.png";
import article from "../../images/article.png";
import video from "../../images/play-button.png";
// import boy from "../../images/boy.png"
import Post from "./Post/Post";
import IconProps from "./IconProps";
const Middle = () => {

const [array,setArray]=useState([]);
const [input,setInput]=useState('');
const [arrayreverse,setArrayreverse]=useState([]);
const SubmitPost=(e)=>{
  e.preventDefault();
  let date=new Date();
  const newEntry={name:"Rushabh Nahata",post:input,date:date.toLocaleTimeString()};

  setArray([...array,newEntry]);
}

useEffect(()=>{
  const mapReverse1 = array.reverse().map(element => {
    return element;
  });
  setArrayreverse(mapReverse1);
},[array]);

  return (
    <div>
      <div className="middle">
        <div className="middle-share-post">
          <div className="middle-share-box">
            <div className="middle-share-image">
              <img src={boy} alt={"boy"} />
            </div>
            <div className="middle-share-input">
              <input type="text" onChange={(e)=>{setInput(e.target.value)}}
               className="postt" placeholder="Start A Post" value={input} />
            </div>
            <div className="middle-share-button">
              <button onClick={SubmitPost}>Post</button></div>
          </div>
          <div className="middle-share-icon">
          <IconProps text="Photo" image={photo} alt="Photo" />

          <IconProps text="Photo" image={video} alt="Photo" />

          <IconProps text="Photo" image={event} alt="Photo" />

          <IconProps text="Photo" image={article} alt="Photo" />
        </div></div>
      </div>
      <Post array={arrayreverse} />
    </div>
  );
};

export default Middle;
