import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="heading">
            <p>About US</p>
          </div>
          <div className="list">
            <ul>
              <li>About OLC group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLX people</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="heading">
            <p>OLX</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>SiteMap</li>
              <li>Legal & Privacy Information © 2006-2023 OLX</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>Other Countries Pakistan-South Africa-Indonesia</p>
        <p>Free Classifieds in India.</p>
      </div>
    </div>
  );
};

export default Footer;
