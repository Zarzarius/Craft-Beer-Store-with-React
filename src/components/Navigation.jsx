import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BeerLogo from "../assets/ZARZARIUS.svg";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { Nav, Container, Button } from "react-bootstrap";

const Navigation = () => {
  // const [error, setError] = useState("");
  // const { logout, currentUser } = useAuth();
  // const history = useHistory();

  // async function handleLogout() {
  //   setError("");

  //   try {
  //     await logout();
  //     history.push("/landing");
  //   } catch {
  //     setError("Failed to log out");
  //   }
  // }

  return (
    <>
      <nav className='navbar navbar-light Nav'>
        <div className='container-fluid'>
          <Link to='/'>
            <img className='Header-logo' src={BeerLogo} alt={BeerLogo} />
          </Link>
          <h2 className='navbar-text  fw-bold'>CRAFTBEER DEALER</h2>
          {/* <button type='button' className='btn btn-outline-light'> */}
          <div
            style={{
              maxWidth: "180px",
              minHeight: "auto",
              backgroundColor: "#fff",
            }}>
            <Link className='btn btn-success' to='/signup'>
              Sign Up
            </Link>
            {/* <Button variant='danger' onClick={handleLogout}>
              Log Out
            </Button> */}
            {/* <span>
              <strong>USER::{currentUser.email}</strong>{" "}
            </span> */}
            {/* {error && <span style={{ color: "red" }}>{error}</span>} */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
