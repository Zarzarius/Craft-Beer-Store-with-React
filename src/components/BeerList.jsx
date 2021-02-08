import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, ButtonGroup } from "react-bootstrap";

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paging, setPaging] = useState(1);

  const URI = `https://api.punkapi.com/v2/beers?page=${paging}&per_page=40`;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(URI);
        const results = await response.json();
        setBeers(results);
        setLoading(false);
        console.log("useFetch", beers[0]);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, [URI]);

  if (loading) return <p className='loading'>Loading...</p>;

  const beerDisplayed = beers.map((beer) => (
    <Link
      to={{
        pathname: `/beerlist/${beer.id}`,
        state: { beer },
      }}
      key={beer.id}>
      <Card
        className='beer-card d-flex align-items-center'
        style={{
          height: "35rem",
          width: "18rem",
          maxWidth: "18rem",
        }}>
        <Card.Img
          style={{
            minHeight: "20rem",
            width: "5rem",
            margin: "0 auto",
            paddingTop: "1rem",
          }}
          variant='top'
          src={beer.image_url}
        />
        <Card.Body>
          <Card.Title>{beer.name}</Card.Title>
          <Card.Text>{beer.tagline}</Card.Text>
        </Card.Body>

        <Button style={{ marginBottom: "1rem" }} variant='primary'>
          Add to Basket
        </Button>
      </Card>
    </Link>
  ));
  const pagingHandlerAdd = () => {
    setPaging(paging + 1);
  };
  const pagingHandlerRest = () => {
    setPaging(paging - 1);
  };

  return (
    <>
      <Container className='container-fluid d-flex align-items-center justify-content-center mb-2'>
        <ButtonGroup aria-label='Basic example'>
          <Button onClick={pagingHandlerRest} variant='success'>
            Previous page
          </Button>

          <Button onClick={pagingHandlerAdd} variant='success'>
            Next Page
          </Button>
        </ButtonGroup>
      </Container>
      <section className='container-fluid beer-list'>{beerDisplayed}</section>
      <Container className='container-fluid d-flex align-items-center justify-content-center mb-2'>
        <ButtonGroup aria-label='Basic example'>
          <Button onClick={pagingHandlerRest} variant='success'>
            Previous page
          </Button>

          <Button onClick={pagingHandlerAdd} variant='success'>
            Next Page
          </Button>
        </ButtonGroup>
      </Container>
    </>
  );
};

export default BeerList;