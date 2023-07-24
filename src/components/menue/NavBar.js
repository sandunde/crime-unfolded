import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import "./NavBar.css";
import logo from "../../img/cf-01.png";

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isResponsiveClose, setResponsiveClose] = useState(false);
  const toggleClass = () => {
    setIsMenu(isMenu === false ? true : false);
    setResponsiveClose(isResponsiveClose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <header className="header__middle">
      <div className="container">
        <div className="row">
          <div className="header__middle__logo">
            <NavLink exact activeClassName="is-active" to="/">
              <img
                src={logo}
                alt="logo"
                style={{ width: 100, marginLeft: 20 }}
              />
            </NavLink>
          </div>

          <div className="header__middle__menus">
            <nav className="main-nav ">
              {isResponsiveClose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    <FiXCircle />
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    <FiAlignRight />
                  </span>
                </>
              )}
              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/`}
                  >
                    Home
                  </NavLink>
                </li>
                {/* <li className="menu-item sub__menus__arrows">
                  <Link to="#">
                    Cases <FiChevronDown />
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/about`}
                      >
                        Shadows of Deceit
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/cases`}
                      >
                        Silent Nightfall
                      </NavLink>
                    </li>
                  </ul>
                </li> */}
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  <Link to="#">
                    Cases <FiChevronDown />
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/OurStory`}
                      >
                        Silent Nightfall
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/OurTeam`}
                      >
                        Shadows of Deceit
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/OurTeam`}
                  >
                    About
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/support`}
                  >
                    Support
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Contact`}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
