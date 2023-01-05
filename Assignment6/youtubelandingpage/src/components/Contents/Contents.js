import React, { useState, useEffect } from "react";
import "./contents.css";

export default function Contents() {
  let videos = [
    {
      Title: "Peach Bowl: Ohio State Buckeyes vs. Georgia Bulldogs",
      channelTitle: "ESPN College Football",
      description:
        "Watch highlights from the Chick-fil-A Peach Bowl as the Georgia Bulldogs rally to beat the Ohio State Buckeyes ",
      thumbnail: "https://i.ytimg.com/vi/hIrAsMmlQzg/mqdefault.jpg",
      icon: "/images/icon1.jpg",
    },
    {
      Title: "Perth Scorchers vs Sydney Thunder",
      channelTitle: "FIFA News",
      description:
        "The annual tradition was back in full force as hundreds of thousands rang in the New Year in New York City's Times Square",
      thumbnail:
        "https://i.ytimg.com/vi/WzRLJIux3P4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoTRptMLacnEFwSYUuzAOKKnZ84A",
      icon: "/images/icon2.jpg",
    },
    {
      Title: "No Guts, No Glory: Thunivu",
      channelTitle: "News 19 WLTX",
      description:
        "The annual tradition was back in full force as hundreds of thousands rang in the New Year in New York City's Times Square",
      thumbnail:
        "https://i.ytimg.com/vi/Uo3JhzD5Vcs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBByr6BLQg1VdxU8pdrWQj8tnyYlQ",
      icon: "/images/icon3.jpg",
    },
    {
      Title: "Tamil Stand-up comedy full show",
      channelTitle: "Stand-up Comedy",
      description:
        "The annual tradition was back in full force as hundreds of thousands rang in the New Year in New York City's Times Square",
      thumbnail:
        "https://i.ytimg.com/vi/eWVtYtRFFRs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXHgVMpV7PBWGnH38G1qut0eFzLQ",
      icon: "/images/icon4.jpg",
    },
    {
      Title: "Venkatesh Bhat makes Kaalan Melagu Masala",
      channelTitle: "Cooking",
      description:
        "The annual tradition was back in full force as hundreds of thousands rang in the New Year in New York City's Times Square",
      thumbnail:
        "https://i.ytimg.com/vi/cxYUOo5xBSc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCe5N7mDg0tb_P-5lD1e0BhHVJqnQ",
      icon: "/images/icon5.jpg",
    },
    {
      Title: "Inventions of future that will change life",
      channelTitle: "Future inventionsx",
      description:
        "The annual tradition was back in full force as hundreds of thousands rang in the New Year in New York City's Times Square",
      thumbnail:
        "https://i.ytimg.com/vi/_f8Gb-vojoU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-avZKRXr5EhknkCljuz_jHah6AQ",
      icon: "/images/icon6.jpg",
    },
    {
      Title: "Top Gun Maverick Behind the Scene",
      channelTitle: "New Story",
      description:
        "The annual tradition was back in full force as hundreds of thousands rang in the New Year in New York City's Times Square",
      thumbnail: "https://i.ytimg.com/vi_webp/C8NnNtWPVgM/movieposter_en.webp",
      icon: "/images/icon7.jpg",
    },
    {
      Title: "Egg Drop From Space",
      channelTitle: "Love space",
      description:
        "The annual tradition was back in full force as hundreds of thousands rang in the New Year in New York City's Times Square",
      thumbnail:
        "https://i.ytimg.com/vi/BYVZh5kqaFg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcOiqiu9uNeEErnZCsSo-pWq9yUA",
      icon: "/images/icon8.jpg",
    },
    {
      Title: "If You Build It, I'll Pay For It!",
      channelTitle: "MrBeast Gaming",
      description:
        "Get exclusive NordVPN deal here https://NordVPN.com/mrbeastgaming It’s risk free with Nord’s 30 day money-back guarantee!",
      thumbnail: "https://i.ytimg.com/vi/RvYkeTmM1gc/mqdefault.jpg",
      icon: "/images/icon9.jpg",
    },
    {
      Title:
        "Fiesta Bowl: TCU Horned Frogs vs. Michigan Wolverines | College Football Playoff",
      channelTitle: "ESPN College Football",
      description:
        "Check out these highlights from TCU's 51-48 win over the Michigan Wolverines in the Vrbo Fiesta Bowl",
      thumbnail: "https://i.ytimg.com/vi/1HKmnriYImE/mqdefault.jpg",
      icon: "/images/icon10.jpg",
    },
    {
      Title: "Dude Perfect vs. Luka Doncic (1-on-1)",
      channelTitle: "Dude Perfect",
      description:
        "Cody vs Luka in 1-on-1, Trick Shots with Luka, and he joins us for Cool Not Cool!",
      thumbnail: "https://i.ytimg.com/vi/n_DtpY9wbGg/mqdefault.jpg",
      icon: "/images/icon1.jpg",
    },
    {
      Title: "Times Square 2023 Ball Drop in New York City: full video",
      channelTitle: "News 19 WLTX",
      description:
        "The annual tradition was back in full force as hundreds of thousands rang in the New Year in New York City's Times Square",
      thumbnail: "https://i.ytimg.com/vi/2-QVvzIvsDs/mqdefault.jpg",
      icon: "/images/icon2.jpg",
    },
  ];
  // let [item, setItem] = useState([]);
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     let response = await fetch("https://dummyjson.com/products");
  //     let data = await response.json();
  //     let products = data.products;
  //     setItem(products);
  //   };
  //   fetchApi();
  // }, []);
  return (
    <div>
      <div className="content">
        {videos.map((ele) => (
          <div className="videoitem">
            <div className="video-img">
              <img src={ele.thumbnail} alt={ele.Title} />
            </div>
            <div className="video-content">
              <div className="video-icon"></div>
              <img src={ele.icon} alt={ele.Title} height="30px" width="30px" />
              <div>
                <span className="title">{ele.Title}</span>
                <p className="title">{ele.channelTitle}</p>
              </div>
              {/* <p>{ele.description}</p> */}
              {/* <button>Add To cart</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
