import React, { useRef, useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <>
      <Container
        className='d-flex align-items-center justify-content-center bg-transparent'
        style={{ minHeight: "100vh" }}>
        <div className='w-100' style={{ maxWidth: "500px" }}>
          <Card>
            <Card.Body>
              <h2 className='text-center mb-4'>Log In</h2>

              {error && <span style={{ color: "red" }}>{error}</span>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' ref={emailRef} requieq />
                </Form.Group>
                <Form.Group id='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' ref={passwordRef} requieq />
                </Form.Group>

                <Button
                  disabled={loading}
                  className='btn btn-outline-light w-100'
                  type='submit'>
                  Log In
                </Button>
              </Form>
              <p className='text-center mt-2'>
                Do you need an account? <Link to='/signup'>Sign In</Link>
              </p>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default LogIn;
