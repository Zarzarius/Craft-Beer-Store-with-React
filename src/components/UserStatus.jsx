import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosCart } from "react-icons/io";

import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "react-bootstrap";

const UserStatus = () => {
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
          <strong>USER: {currentUser.email}</strong>
        </span>
      ))
    : (user = (
        <span>
          <strong>NO USER</strong>
        </span>
      ));
  return (
    <>
      <div className='user-status'>
        {user}
        {loginButton}
        {error && <span style={{ color: "red" }}>{error}</span>}
        <div className='basket-container'>
          <Link to='/basket' className='btn basket'>
            <IoIosCart />
          </Link>
          <div className='qty'>
            <strong>1</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserStatus;
