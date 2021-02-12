import React, { useRef, useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
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
              <h2 className='text-center mb-4'>Sign Up</h2>

              {error && <span style={{ color: "red" }}>{error}</span>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' ref={emailRef} required />
                </Form.Group>
                <Form.Group id='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' ref={passwordRef} required />
                </Form.Group>
                <Form.Group id='password-confirm'>
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type='password'
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Button
                  disabled={loading}
                  className='btn btn-outline-light w-100'
                  type='submit'>
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
            <p className='text-center mt-2'>
              Already have an account? <Link to='/login'>Log In</Link>
            </p>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
