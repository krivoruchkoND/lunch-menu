import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

function CarouselDraft() {
  return (
    <Carousel pause>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="https://via.placeholder.com/200x100.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="https://via.placeholder.com/200x100.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="https://via.placeholder.com/200x100.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default function Lunch() {
  return (
    <Container className="text-center">
      <Card>
        <h1>Build your lunch</h1>
      </Card>
      <Card className="bg-secondary">
        <CarouselDraft />
      </Card>
      <Card className="bg-secondary">
        <CarouselDraft />
      </Card>
      <Card className="bg-secondary">
        <CarouselDraft />
      </Card>
      <Card className="bg-secondary">
        <CarouselDraft />
      </Card>
      <Card>
        <Button className="w-25 mx-auto">Order</Button>
      </Card>
    </Container>
  );
}