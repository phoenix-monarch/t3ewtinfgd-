import React from "react";
import "./navbar.css";
import logo from "../../media/logo.png";
import profileIcon from "../../media/profile.jpg";
import {
  FaSearch,
  FaFilter,
  FaDiscord,
  FaRedditAlien,
  FaRandom,
  FaBars,
  FaTelegramPlane,
  FaLanguage,
  FaComments,
  FaBell,
  FaTwitter,
  FaBroadcastTower,
} from "react-icons/fa";

export default function NavBar(props) {
  const setSidebarIsOpen = props.setSidebarIsOpen;

  return (
    <>
      <nav className="navigation-bar a-center d-flex">
        <div className="menu-group a-center d-flex">
          <FaBars
            size={20}
            className="burger-icon trans-05"
            onClick={() => setSidebarIsOpen(true)}
          />
          <div className="logo-wrapper a-center d-flex">
            <img src={logo} className="logo" alt="logo" />
          </div>
        </div>
        <div className="search-wrapper">
          <input
            type="text"
            className="search-text f-poppins"
            placeholder="Search anime..."
          />
          <FaSearch
            className="search-icon search-icons"
            size={20}
            color="grey"
          />
          <FaFilter
            className="filter-icon search-icons"
            size={20}
            color="grey"
          />
        </div>
        <div className="social-links-wrapper">
          <span
            style={{ backgroundColor: "#6f85d5" }}
            className="d-flex a-center j-center"
          >
            <FaDiscord size={22} />
          </span>
          <span
            style={{ backgroundColor: "#ff3c1f" }}
            className="d-flex a-center j-center"
          >
            <FaRedditAlien size={22} />
          </span>
          <span
            style={{ backgroundColor: "#08c" }}
            className="d-flex a-center j-center"
          >
            <FaTelegramPlane size={22} />
          </span>
          <span
            style={{ backgroundColor: "#1d9bf0" }}
            className="d-flex a-center j-center"
          >
            <FaTwitter size={22} />
          </span>
        </div>
        <div className="nav-actions f-poppins text-light trans-c-03">
          <span>
            <FaBroadcastTower size={20} />
            <p>Watch Togather</p>
          </span>
          <span>
            <FaRandom size={20} />
            <p>Random</p>
          </span>
          <span>
            <FaLanguage size={20} />
            <p>Anime Name</p>
          </span>
          <span>
            <FaComments size={20} />
            <p>Community</p>
          </span>
        </div>
        <div className="user-profile-nots a-center j-center d-flex trans-c-03">
          <FaBell size={20} />
          <img className="profile-icon" src={profileIcon} alt="profile-icon" />
        </div>
      </nav>
    </>
  );
}
