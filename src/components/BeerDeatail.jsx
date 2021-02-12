import React from "react";
import { Button } from "react-bootstrap";

const BeerDeatail = (props) => {
  const {
    name,
    tagline,
    description,
    image_url,
    food_pairing,
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
