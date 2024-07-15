import React, { useContext } from "react";
import "./header.css";
import olxLogo from "../../assets/images/olx-logo-vector.png";
import SearchIcon from "../../assets/images/search.png";
import ArrowIcon from "../../assets/images/pngwing.com.png";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext, FireBaseContext } from "../../store/Context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useContext(AuthContext);
  const { auth } = useContext(FireBaseContext); // Access auth from FireBaseContext
  console.log("Firebase context auth:", auth);

  const navigate = useNavigate();
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("logout error", error.message);
      });
  };

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <img src={olxLogo} alt="OLX Logo" />
        </div>
        <div className="placeSearch">
          <img src={SearchIcon} alt="Search Icon" />
          <input type="text" defaultValue="India" />
          <img src={ArrowIcon} alt="Arrow Icon" />
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find Cars, Mobile Phones, and more"
            />
          </div>
          <div className="searchAction">
            <img src={SearchIcon} alt="Search Icon" />
          </div>
        </div>
        <div className="language">
          <span>English</span>
          <img src={ArrowIcon} alt="Arrow Icon" />
        </div>
        <div className="loginPage">
          <span>{user ? `Welcome ${user.displayName}` : "Login"}</span>
          <hr />
        </div>
        {user && <span onClick={handleLogout}>Logout</span>}

        <div className="sellMenu">
          <SellButton />
          <div className="sellMenuContent">
            <SellButtonPlus />
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
