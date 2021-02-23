import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { fetchBeer } from "../store/actions/beerActions";
import { useSelector } from "react-redux";
const BeerList = () => {
  const dispatch = useDispatch();
  const beerItems = useSelector((state) => state.beerReducer.beerItems);

  useEffect(() => {
    dispatch(fetchBeer());
  }, []);

  const renderBeerItems = beerItems
    .filter(
      (beer) =>
        !beer.image_url.includes("keg") && !beer.image_url.includes("cask")
    )
    .map((beer, index) => (
      <Card
        key={index}
        className='beer-card d-flex align-items-center'
        style={{
          height: "35rem",
          width: "18rem",
          maxWidth: "18rem",
        }}>
        <Card.Img
          style={{
            minHeight: "18rem",
            width: "5rem",
            margin: "0 auto",
            paddingTop: "1rem",
          }}
          variant='top'
          src={beer.image_url}
        />
        <Link
          to={{
            pathname: `/beerlist/${beer.id}`,
            state: { beer },
          }}
          key={beer.id}>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>{beer.name}</Card.Title>
            {/* <Card.Text>{beer.tagline}</Card.Text> */}
          </Card.Body>{" "}
        </Link>
        <div>
          <span style={{ fontSize: "30px", fontWeight: "600" }}>
            {beer.price}€{" "}
          </span>
        </div>
        <Button
          onClick={() => dispatch(addToCart(beer))}
          style={{ marginBottom: "1rem" }}
          variant='primary'>
          Add to Cart
        </Button>
      </Card>
    ));

  return (
    <>
      <Container className='container-fluid d-flex align-items-center justify-content-center mb-4yarn '></Container>
      <section className='container-fluid beer-list'>{renderBeerItems}</section>
      <Container className='container-fluid d-flex align-items-center justify-content-center mb-2'></Container>
    </>
  );
};

export default BeerList;
