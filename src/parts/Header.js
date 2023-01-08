import Button from "elements/Button";
import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import BrandIcon from "./IconText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return window.location.pathname === path ? " active" : "";
  };

  if (props.isCentered) {
    return(
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                Stay<span className="text-gray-900">cation.</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    )
  }

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item ${getNavLinkClass("/")}`}>
                <Link to="/">
                  <Button className="nav-link" type="link">
                    Home
                  </Button>
                </Link>
                </li>

                <li className={`nav-item ${getNavLinkClass("/browse-by")}`}>
                  <Link to="/browse-by">
                  <Button className="nav-link" type="link" >
                    Browse by
                  </Button>
                  </Link>
                </li>

                <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                  <Link to="/stories">
                  <Button className="nav-link" type="link" >
                    Stories
                  </Button>
                  </Link>
                </li>

                <li className={`nav-item ${getNavLinkClass("/agents")}`}>
                  <Link to="/agents">
                  <Button className="nav-link" type="link" >
                    Agents
                  </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
