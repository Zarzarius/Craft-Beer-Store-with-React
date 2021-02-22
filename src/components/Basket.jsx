import React, { useEffect } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addQuantity, removeFromCart } from "../store/actions/cartActions";
import { useDispatch } from "react-redux";

const Basket = () => {
  const dispatch = useDispatch();
  const beerTest = [
    {
      id: 6,
      name: "Electric India",
      tagline: "Vibrant Hoppy Saison",
      first_brewed: "05/2013",
      description:
        "Re-brewed as a spring seasonal, this beer – which appeared originally as an Equity Punk shareholder creation – retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.",
      image_url: "https://images.punkapi.com/v2/6.png",
      abv: 5.2,
      ibu: 38,
      target_fg: 1005,
      target_og: 1045,
      ebc: 15,
      srm: 7.5,
      ph: 4.4,
      attenuation_level: 88.9,
    },
  ];
  const beerTestJSON = JSON.stringify(beerTest);
  useEffect(() => {
    localStorage.setItem("cartItems", beerTestJSON);
    // const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  }, []);

  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const renderCartItems = cartItems.map((beer, index) => (
    <Container>
      <Card
        key={index}
        className='beer-card d-flex align-items-center'
        style={{
          minHeight: "15rem",
          width: "15rem",
        }}>
        <Card.Img
          style={{
            width: "3rem",
            margin: "0 auto",
            paddingTop: "1rem",
          }}
          variant='top'
          src={beer.image_url}
        />
        <Card.Body>
          <Card.Title>{beer.name}</Card.Title>
          <span>{beer.quantity} </span>
          <span
            style={{
              margin: "0 auto",
              fontSize: "30px",
              fontWeight: "600",
              textAlign: "center",
            }}>
            {beer.price + "€"}{" "}
          </span>
        </Card.Body>
        <div style={{ marginBottom: "1rem" }}>
          <Button
            onClick={() => dispatch(removeFromCart(beer.id))}
            variant='primary'>
            Remove from Cart
          </Button>
          <Button
            onClick={() => dispatch(addQuantity(beer.id))}
            variant='light'>
            +
          </Button>

          <Button variant='light'>-</Button>
        </div>
      </Card>
    </Container>
  ));

  return (
    <>
      <Container
        className='d-flex  justify-content-center bg-transparent '
        style={{ minHeight: "100vh" }}>
        <div className='w-100 basket-card' style={{ maxWidth: "900px" }}>
          <Link
            to='/beerlist'
            type='button'
            className='close'
            aria-label='Close'>
            <span aria-hidden='true'>&times;</span>
          </Link>
          <h1>Basket</h1>
          <div>{renderCartItems} </div>
        </div>
      </Container>
    </>
  );
};

export default Basket;
