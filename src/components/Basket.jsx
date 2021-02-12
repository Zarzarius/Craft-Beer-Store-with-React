import React from "react";
import { Container } from "react-bootstrap";

const Basket = () => {
  return (
    <>
      <Container
        className='d-flex  justify-content-center bg-transparent'
        style={{ minHeight: "100vh" }}>
        <div className='w-100' style={{ maxWidth: "800px" }}>
          <h1 style={{ backgroundColor: "#fff", color: "white" }}>Basket</h1>
        </div>
      </Container>
    </>
  );
};

export default Basket;
