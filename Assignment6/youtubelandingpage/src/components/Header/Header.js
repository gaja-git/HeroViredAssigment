import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="section1">
          <div className="yticon">
            <i className="fa fa-bars " aria-hidden="true"></i>
          </div>
          <div className="ytlogo">
            <img src="/images/youtube.jfif" alt="youtube logo" />
          </div>
        </div>
        <div className="section2">
          <div className="searchbox">
            <input type="text" />
            <i className="fa fa-search"></i>
          </div>
          <div className="mic">
            <i className="fa fa-microphone"></i>
          </div>
        </div>

        <div className="section3">
          <i className="fa fa-video-camera"></i>
          <i className="fa fa-bell-o"></i>
          <button>G</button>
        </div>
      </div>
      {/* <div className="lowerblock">
        <div className="verticaltab"></div>
      </div> */}
    </div>
  );
}
