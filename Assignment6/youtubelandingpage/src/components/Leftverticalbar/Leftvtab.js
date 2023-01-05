import React from "react";
import "./leftvtab.css";

export default function LeftVerticalTab() {
  return (
    <div className="lefttab">
      <div className="Home">
        <span>
          <i className="fa fa-home"></i>
          &nbsp;&nbsp;&nbsp;Home
        </span>
      </div>

      <div className="Shorts">
        <span>
          <i className="fa fa-paperclip"></i>
          &nbsp;&nbsp;&nbsp;shorts
        </span>
      </div>
      <div className="Subscription bot-border">
        <span>
          <i className="fa fa-caret-square-o-right"></i>
          &nbsp;&nbsp;&nbsp;subscription
        </span>
      </div>
      {/* <div className="bot-border">
        <p></p>
      </div> */}
      <div className="Library">
        <span>
          <i className="fa fa-book"></i>
          &nbsp;&nbsp;&nbsp;Library
        </span>
      </div>
      <div className="History">
        <span>
          <i className="fa fa-check-circle-o"></i>
          &nbsp;&nbsp;&nbsp;History
        </span>
      </div>
      <div className="Watch-later">
        <span>
          <i className="fa fa-clock-o"></i>
          &nbsp;&nbsp;&nbsp;Watch later
        </span>
      </div>
      <div className="Liked-videos bot-border">
        <span>
          <i className="fa fa-thumbs-o-up"></i>
          &nbsp;&nbsp;&nbsp;Liked videos
        </span>
      </div>
      <div className="Subs-sec">
        <h5>Subscription</h5>
      </div>
      <div className="Loves-music">
        <span>
          <i className="fa fa-music"></i>
          &nbsp;&nbsp;&nbsp;Love music forever
        </span>
      </div>
      <div className="Browse-channels bot-border">
        <span>
          <i className="fa fa-plus-circle"></i>
          &nbsp;&nbsp;&nbsp;Browse channels
        </span>
      </div>
      <div className="explore">
        <h5>Explore</h5>
      </div>
      <div className="Trending">
        <span>
          <i className="fa fa-free-code-camp"></i>
          &nbsp;&nbsp;&nbsp;Trending
        </span>
      </div>
      <div className="music">
        <span>
          <i className="fa fa-music"></i>
          &nbsp;&nbsp;&nbsp;Music
        </span>
      </div>
      <div className="movie">
        <span>
          <i className="fa fa-file-video-o"></i>
          &nbsp;&nbsp;&nbsp;Movies
        </span>
      </div>
      <div className="live">
        <span>
          <i className="fa fa-wifi"></i>
          &nbsp;&nbsp;&nbsp;Live
        </span>
      </div>
      <div className="sports">
        <span>
          <i className="fa fa-hourglass-end"></i>
          &nbsp;&nbsp;&nbsp;Sports
        </span>
      </div>
      <div className="learning">
        <span>
          <i className="fa fa-lightbulb-o"></i>
          &nbsp;&nbsp;&nbsp;Learning
        </span>
      </div>
      <div className="fashion">
        <span>
          <i className="fa fa-shopping-basket"></i>
          &nbsp;&nbsp;&nbsp;FreeShopping
        </span>
      </div>
    </div>
  );
}
