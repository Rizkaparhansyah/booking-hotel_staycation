import Button from "elements/Button";
import React from "react";
import BrandIcon from "./IconText";

export default function Header(props) {

  const getNavLinkClass = path => {
    return props.locations.pathname === path ? "active" : ""
  }

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" to="/">
                  Home
                </Button>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/browseby")}`}>
                <Button className="nav-link" type="link" to="/browse-by">
                  Browse by
                </Button>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/stories")}`}>
                <Button className="nav-link" type="link" to="/stories">
                  Stories
                </Button>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/agents")}`}>
                <Button className="nav-link" type="link" to="/agents">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
