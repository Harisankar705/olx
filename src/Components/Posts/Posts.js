import React from "react";
import Heart from "../../assets/images/like.png";
import "./Post.css";
import V3 from "../../assets/product-images/v3.jpg";

const Posts = () => {
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View More</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favourite">
              <img src={Heart} alt="Heart-icon" />
            </div>
            <div className="image">
              <img src={V3} alt="v3-icon" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;25000</p>
              <span className="kilometer">Two wheeler</span>
              <p className="name">Yamaha R15 V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favourite">
              <img src={Heart} alt="heart-icon" />
            </div>
            <div className="image">
              <img src={V3} alt="v3-icon" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;25000</p>
              <span className="kilometer">Two wheeler</span>
              <p className="name">Yamaha R15 V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Posts;
