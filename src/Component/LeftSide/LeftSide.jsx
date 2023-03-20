import React from 'react'
import boy from "../../images/boy.png"
import bookmark from "../../images/bookmark-white.png"
import "./leftside.css"
const LeftSide = () => {
  return (
    <div>
        <div className="leftside">
            <div className="leftside-box">

                <div className="leftside-box-header">
                    <div className="leftside-box-header-img">
                        <img src={boy} alt="boy"/>
                    </div>
                    <div className="leftside-box-header-description">
                        <p>Rushabh Nahata</p>
                    </div>
                </div>

                <div className="leftside-box-connection">
                    <div className="leftside-box-connection-header">
                       <h3>Connections <span>130</span></h3>
                    </div>
                    <div className="leftside-box-connection-description">
                        <p>Connect with Alumini</p>
                    </div>
                </div>


                <div className="leftside-box-items">
                    <div className="leftside-box-items-image">
                       <img src={bookmark} alt={bookmark}/>
                    </div>
                    <div className="leftside-box-items-description">
                        <h3>My items</h3>
                    </div>
                </div>

                



            </div>
        </div>
    </div>
  )
}

export default LeftSide