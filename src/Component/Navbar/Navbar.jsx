import React from "react";
import linkedin from "../../images/linkedin.png";
import home from "../../images/home.png";
import job from "../../images/job.png";
import networking from "../../images/networking.png";
import tools from "../../images/tools.png";
import message from "../../images/comments.png";
import boy from "../../images/boy.png";
import notification from "../../images/notification.png";
import "../Navbar/navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">
            <div className="navbar-image-holder">
              <img src={linkedin} alt={"linkedin"} />
            </div>
            <input type="text" className="navbar-input" placeholder="Search" />
          </div>
        </div>

        <div className="navbar-right">
          <div className="navbar-right-box">
            <div className="navbar-right-image">
              <img src={home} alt={"home"} />
            </div>
            <div className="navbar-right-description">
              <p>Home</p>
            </div>
          </div>

          <div className="navbar-right-box">
            <div className="navbar-right-image">
              <img src={networking} alt={"My network"} />
            </div>
            <div className="navbar-right-description">
              <p>My network</p>
            </div>
          </div>

          <div className="navbar-right-box">
            <div className="navbar-right-image">
              <img src={job} alt={"job"} />
            </div>
            <div className="navbar-right-description">
              <p>Jobs</p>
            </div>
          </div>

          <div className="navbar-right-box">
            <div className="navbar-right-image">
              <img src={message} alt={"Message"} />
            </div>
            <div className="navbar-right-description">
              <p>Messaging</p>
            </div>
          </div>

              
          <div className="navbar-right-box">
            <div className="navbar-right-image">
              <img src={notification} alt={"notification"} />
            </div>
            <div className="navbar-right-description">
              <p>Notification</p>
            </div>
          </div>

          <div className="navbar-right-box navbar-right-image-me">
            <div className="navbar-right-image ">
              <img src={boy} alt={"Me"} />
            </div>
            <div className="navbar-right-description">
              <p>Me</p>
            </div>
          </div>
          
          
          <div className="navbar-right-box">
            <div className="navbar-right-image">
              <img src={tools} alt={"tools"} />
            </div>
            <div className="navbar-right-description">
              <p>Tools</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
