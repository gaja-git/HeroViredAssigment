import React from "react";
import Container from "../Containerbox/Container";
import LeftVerticalTab from "../Leftverticalbar/Leftvtab";
import "./tabcontent.css";

export default function TabContent() {
  return (
    <div className="tabcontent">
      <LeftVerticalTab></LeftVerticalTab>
      <Container></Container>
    </div>
  );
}
