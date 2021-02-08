import React from "react";
import logo from "../assets/Zarzarius.png";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Landing = () => {
  return (
    <>
      <Container
        style={{ minWidth: "100vw", minHeight: "100vh" }}
        className='landing d-flex align-items-flex-start justify-content-flex-start
        bg-transparent'>
        <div className='App'>
          <header className='App-header'>
            <Link to='/Beerlist'>
              <img src={logo} className='App-logo' alt='logo' />
            </Link>
            <Link
              className='btn btn-outline-light'
              style={{ width: "150px", alignSelf: "center" }}
              to='/videoInfo'>
              Know more about Craft Beer
            </Link>
          </header>
        </div>
      </Container>
    </>
  );
};

export default Landing;
