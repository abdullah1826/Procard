import React from "react";
import "./loadingscreen.css";
import { BeatLoader } from "react-spinners";
import sapidlogo from "./sapidimg/sapidtransparent.png";
import sapidvlogo from "../../Assets/Images/kindlogo.png";
import img1 from "../LoadingScreen/sapidimg/procard.png"
const LoadingScreen = () => {
  return (
    <div className="loading_screen">
      <div className="loading-sub-screen">
        <div className="image_container">
          <img src={img1} alt="Sapid" className="sapid-logo" />
        </div>
        <BeatLoader style={{color:'balck'}} />
      </div>
    </div>
  );
};

export default LoadingScreen;
