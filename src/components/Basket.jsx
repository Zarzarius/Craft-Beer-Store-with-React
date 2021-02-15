import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Basket = (props) => {
  return (
    <>
      <Container
        className='d-flex  justify-content-center bg-transparent '
        style={{ minHeight: "100vh" }}>
        <div className='w-100 basket-card' style={{ maxWidth: "800px" }}>
          <Link to='/beerlist' type='button' class='close' aria-label='Close'>
            <span aria-hidden='true'>&times;</span>
          </Link>
          <h1>Basket</h1>
        </div>
      </Container>
    </>
  );
};

export default Basket;
