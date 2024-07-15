import React from "react";
import "./Banner.css";
import bannerImage from '../../assets/images/banner copy.png'
const Banner = () => {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>All categories</span>
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>MotorCycle</span>
            <span>MobilePhones</span> 
            <span>For Sale:Houses & Apartments</span>
            <span>Scooters</span>
            <span>Commercial & Other Vehicles</span>
            <span>For Rent:House & Apartments</span>
          </div>
        </div>
        <div className="banner">
            <img src={bannerImage}/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
