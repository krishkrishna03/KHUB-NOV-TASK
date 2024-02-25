import React from 'react';
import './Dashboard.css' // Make sure you have the corresponding CSS file for styling.
import {FaFacebookF,FaTwitter,FaInstagram, FaGithub, FaYoutube} from "react-icons/fa"

function Dashboard() {
  return (
    <div className="wrapper">
      <div className="button">
        <div className="icon">
          <i><FaFacebookF/></i>
        </div>
        <span>Facebook</span>
      </div>
      <div className="button">
        <div className="icon">
          <i><FaTwitter/></i>
        </div>
        <span>Twitter</span>
      </div>
      <div className="button">
        <div className="icon">
          <i><FaInstagram/></i>
        </div>
        <span>Instagram</span>
      </div>
      <div className="button">
        <div className="icon">
          <i><FaGithub/></i>
        </div>
        <span>Github</span>
      </div>
      <div className="button">
        <div className="icon">
          <i><FaYoutube/></i>
        </div>
        <span>YouTube</span>
      </div>
    </div>
  );
}

export default Dashboard;
