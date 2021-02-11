import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BeerLogo from "../assets/ZARZARIUS.svg";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Nav, Button } from "react-bootstrap";

const Navigation = () => {
  const [error, setError] = useState("");
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }

  let loginButton;
  currentUser
    ? (loginButton = (
        <Button variant='danger' onClick={handleLogout}>
          Log Out
        </Button>
      ))
    : (loginButton = (
        <Link className='btn btn-success' to='/login'>
          Log In
        </Link>
      ));

  let user;
  currentUser
    ? (user = (
        <span>
          <strong>USER:{currentUser.email}</strong>
        </span>
      ))
    : (user = (
        <span>
          <strong>NO USER</strong>
        </span>
      ));

  return (
    <>
      <Nav className='navbar navbar-light Nav'>
        <div className='container-fluid'>
          <Link to='/'>
            <img className='Header-logo' src={BeerLogo} alt={BeerLogo} />
          </Link>
          <h2 className='navbar-text  fw-bold'>CRAFTBEER DEALER</h2>
          {/* <button type='button' className='btn btn-outline-light' /> */}
          <div
            style={{
              width: "auto",
              minHeight: "auto",
              backgroundColor: "#fff",
            }}>
            {loginButton}
            {user}
            {error && <span style={{ color: "red" }}>{error}</span>}
          </div>
        </div>
      </Nav>
    </>
  );
};
export default Navigation;
