import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";

const BeerDeatail = (props) => {
  const dispatch = useDispatch();

  const {
    name,
    tagline,
    description,
    image_url,
    food_pairing,
    price,
  } = props.location.state.beer;

  const pairingMatch = food_pairing.map((food, i) => <p key={i}>{food}</p>);

  console.log("beerdetail", props.location.state.beer);
  return (
    <section className='beer-box'>
      <div className='beer-detail'>
        <h1>{name}</h1>
        <h3>{tagline} </h3>
        <hr />
        <div className='desctiption-card'>
          <img className='beer-pic' src={image_url} alt={image_url} />
          <span className='description-text'>{description} </span>
          <div>
            <span style={{ fontSize: "30px", fontWeight: "600" }}>
              {price}€{" "}
            </span>
            <Button
              onClick={() => dispatch(addToCart(props.location.state.beer))}
              style={{ marginBottom: "1rem" }}
              variant='primary'>
              Add to Cart
            </Button>
          </div>
        </div>
        <div className='pairing'>
          <h3>Perfect to pair with:</h3>
          <span>{pairingMatch} </span>
        </div>

        <Button variant='primary' onClick={() => props.history.goBack()}>
          Take me back
        </Button>
      </div>
    </section>
  );
};

export default BeerDeatail;
