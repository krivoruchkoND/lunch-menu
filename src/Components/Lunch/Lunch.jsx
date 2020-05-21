import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BuildInCarousel from '../BuildInCarousel';

function CarouselDraft() {
  const items = ["https://via.placeholder.com/200x100.png", "https://via.placeholder.com/200x100.png", "https://via.placeholder.com/200x100.png"];
  return (
      <BuildInCarousel autoPlay={false} imgArray={items} />
  );  
}

export default function Lunch() {
  return (
    <Container className="text-center">
      <h3>Build your lunch</h3>
      <hr />
      <h3>Select Soup</h3>
      <CarouselDraft />
      <hr />
      <h3>Select Main Course</h3>
      <CarouselDraft />
      <hr />
      <h3>Select Salad</h3>
      <CarouselDraft />
      <hr />
      <h3>Select Drink</h3>
      <CarouselDraft />
      <hr />
      <Button className="w-25 mx-auto">Order</Button>
    </Container>
  );
}