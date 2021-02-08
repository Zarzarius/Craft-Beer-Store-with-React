import React from "react";
import { Button } from "react-bootstrap";

const BeerDeatail = (props) => {
  const {
    name,
    tagline,
    first_brewed,
    description,
    image_url,
    food_pairing,
  } = props.location.state.beer;

  const pairingMatch = food_pairing.map((food, i) => <p key={i}>{food}</p>);

  console.log("beerdetail", props.location.state.beer);
  return (
    <section className='beer-box'>
      <div className='beer-detail'>
        <h2>{name}</h2>
        <h3>First Brewed: {first_brewed}</h3>
        <h3>{tagline} </h3>
        <hr />
        <div className='desctiption-card'>
          <img className='beer-pic' src={image_url} alt={image_url} />
          <p className='description-text'>{description} </p>
        </div>
        <div className='pairing'>
          <h3>Perfect to pair with:</h3>
          <p>{pairingMatch} </p>
        </div>

        <Button variant='primary' onClick={() => props.history.goBack()}>
          Take me back
        </Button>
      </div>
    </section>
  );
};

export default BeerDeatail;