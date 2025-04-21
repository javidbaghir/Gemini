import React, { useContext } from "react";
import "./Main.css";
import TitleSide from "./TitleSide";
import MainContainer from "./MainContainer";
import { Context } from "../../context/Context";

const Main = () => {

  return (
    <div className="main">
      <TitleSide />
      <MainContainer  />
    </div>
  );
};

export default Main;
