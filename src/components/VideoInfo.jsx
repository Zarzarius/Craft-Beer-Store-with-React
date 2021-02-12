import React from "react";
import Iframe from "react-iframe";
import { Container, Button } from "react-bootstrap";

const VideoInfo = (props) => {
  return (
    <>
      <Container
        className='d-flex align-items-center justify-content-center bg-transparent'
        style={{ minHeight: "100vh" }}>
        <Iframe
          width='800'
          height='600'
          src='https://www.youtube.com/embed/B3iBoNKxdwU'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></Iframe>
        <Button variant='primary' onClick={() => props.history.goBack()}>
          Take me back
        </Button>
      </Container>
    </>
  );
};

export default VideoInfo;
