import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BeerLogo from "../assets/ZARZARIUS.svg";
import { Link } from "react-router-dom";

import { Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Nav className='navbar navbar-light '>
        <div className='container-fluid'>
          <Link to='/'>
            <img className='Header-logo' src={BeerLogo} alt={BeerLogo} />
          </Link>
          <h2 className='Navbar-text'>CRAFTBEER DEALER</h2>
          <Link to='/basket'>Basket</Link>
        </div>
      </Nav>
    </>
  );
};
export default Navigation;
