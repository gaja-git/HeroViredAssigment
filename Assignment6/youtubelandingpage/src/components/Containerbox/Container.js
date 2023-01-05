import React from "react";
import Contents from "../Contents/Contents";
import SubHeader from "../Subheader/SubHeader";
import "./container.css";

export default function Container() {
  return (
    <div className="container">
      <SubHeader></SubHeader>
      <Contents></Contents>
    </div>
  );
}
