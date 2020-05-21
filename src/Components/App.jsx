import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import Home from './Home/Home';
import About from './About/About';
import Deals from './Deals/Deals';
import Menu from './Menu/Menu';
import Drinks from './Drinks/Drinks';
import Lunch from './Lunch/Lunch';

import ScrollToTop from './ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Container>
          <Header />
          <hr />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/deals' component={Deals}/>
            <Route path='/menu' component={Menu}/>
            <Route path='/drinks' component={Drinks}/>
            <Route path='/lunch' component={Lunch}/>
          </Switch>
          <Footer />
      </Container>
    </Router>
  );
}
