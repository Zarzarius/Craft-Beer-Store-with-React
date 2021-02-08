import React from "react";
import { Button, Container } from "react-bootstrap";

const NotFound404 = (props) => {
  return (
    <Container
      className='d-flex align-items-center justify-content-center bg-transparent'
      style={{ minHeight: "100vh" }}>
      <section>
        <h1 style={{ color: "red", fontSize: "70px" }}>Error 404</h1>
        <h3>Page Not Found</h3>
        <Button variant='primary' onClick={() => props.history.goBack()}>
          Take me back
        </Button>
      </section>
    </Container>
  );
};

export default NotFound404;
