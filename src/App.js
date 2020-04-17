import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Container, Dropdown, Row, Col, Card, Carousel } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function BasicExample() {
  return (
    <Router>
      <Container>
        <Row className="align-items-center">
          <Col xs={2}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Menu
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as="button"><Link to="/deals">today's deals</Link></Dropdown.Item>
                <Dropdown.Item as="button"><Link to="/lunch">business lunch</Link></Dropdown.Item>
                <Dropdown.Item as="button"><Link to="/menu">menu</Link></Dropdown.Item>
                <Dropdown.Item as="button"><Link to="/drinks">drinks</Link></Dropdown.Item>
                <Dropdown.Item as="button"><Link to="/about">about us</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <h2 className="text-center"><Link to="/">Restaurant lunch menu</Link></h2>
          </Col>
        </Row>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path="/lunch">
            <Lunch />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/drinks">
            <Drinks />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

function Home() {
  return (
    <Container className="text-center">
      <Card>
        <div className="card-body">
          <Link to="/deals">Special offer</Link>
        </div>
      </Card>
      <hr />
      <Card>
        <div className="card-body">
          <Row>
            <Col>CarouselNew</Col>
            <Col>Recomended</Col>
            <Col>Hot</Col>
          </Row>
        </div>
      </Card>
      <hr />
      <Card>
        <div className="card-body">
          <Link to="/lunch">Build your lunch</Link>
        </div>
      </Card>
    </Container>
  );
}

function About() {
  return (
    <Container>
      <h2>About</h2>
    </Container>
  );
}

function Deals() {
  return (
    <Container>
      <h2>Deals</h2>
    </Container>
  );
}

function Menu() {
  return (
    <Container>
      <h2>Menu</h2>
    </Container>
  );
}

function Drinks() {
  return (
    <Container>
      <h2>Drinks</h2>
    </Container>
  );
}
function Lunch() {
  return (
    <Container className="text-center">
      <Card>
        <h1>Build your lunch</h1>
      </Card>
      <Card className='bg-secondary'>
        <Carousel pause>
          <Carousel.Item>
            <img
              className="d-block mx-auto"
              src="https://via.placeholder.com/200x100.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Card>
      <Card>
        
      </Card>
      <Card>
        
      </Card>
      <Card>
        
      </Card>
      <Card>
        
      </Card>
    </Container>
  );
}
