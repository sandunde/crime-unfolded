import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import "./NavBar.css";
import logo from "../../img/cf-01.png";

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isResponsiveClose, setResponsiveClose] = useState(false);
  const toggleClass = () => {
    setIsMenu(!isMenu);
    setResponsiveClose(!isResponsiveClose);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(!isMenuSubMenu);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  }

  const cases = [
    { name: "Home", path: "/" },
    {
      name: "Cases",
      path: "/Cases",
      subCases: [
        { name: "Isabella Grace", path: "/Isabella" },
        { name: "Sophia Elizabeth", path: "/Sophia" },
        { name: "Rose Martinez", path: "/Rose" },
      ],
    },
    { name: "About", path: "/About" },
    { name: "Support", path: "/support" },
    { name: "Contact", path: "/Contact" },
  ];

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
              {isResponsiveClose ? (
                <span
                  className="menubar__button"
                  style={{ display: "none" }}
                  onClick={toggleClass}
                >
                  <FiXCircle />
                </span>
              ) : (
                <span
                  className="menubar__button"
                  style={{ display: "none" }}
                  onClick={toggleClass}
                >
                  <FiAlignRight />
                </span>
              )}
              <ul className={boxClass.join(" ")}>
                {cases.map((item, index) => (
                  <li
                    key={index}
                    className={`menu-item ${
                      item.subCases ? "sub__menus__arrows" : ""
                    }`}
                  >
                    <NavLink
                      exact={!item.subCases}
                      activeClassName="is-active"
                      onClick={toggleClass}
                      to={item.path}
                    >
                      {item.name}
                      {item.subCases && <FiChevronDown />}
                    </NavLink>
                    {item.subCases && (
                      <ul className={boxClassSubMenu.join(" ")}>
                        {item.subCases.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              onClick={toggleClass}
                              activeClassName="is-active"
                              to={subItem.path}
                            >
                              {subItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
