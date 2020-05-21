import React from 'react';

import saladIcon from '../../Icons/salad.png';
import soupIcon from '../../Icons/soup.png';
import dishesIcon from '../../Icons/dishes.png';
import dessertIcon from '../../Icons/dessert.png';
export default function Menu() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm">
          <ul className="navbar-nav">
              <li className="nav-item">
                  <a className="nav-link" href='#salads'><h3>Salads</h3></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href='#soups'><h3>Soups</h3></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href='#mains'><h3>Mains</h3></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href='#dessert'><h3>Dessert</h3></a>
              </li>
          </ul>
      </nav>
      <section id='salads'>
          <div className="card text-body text-decoration-none mb-3">
              <h2 className="card-header">
                  Salads
              </h2>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={saladIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Salad 1</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={saladIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Salad 2</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={saladIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Salad 3</h3></li>
              </ul>
          </div>
      </section>
      <section id='soups'>
          <div className="card text-body text-decoration-none mb-3">
              <h2 className="card-header">
                  Soups
              </h2>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={soupIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Soup 1</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={soupIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Soup 2</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={soupIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Soup 3</h3></li>
              </ul>
          </div>
      </section>
      <section id='mains'>
          <div className="card text-body text-decoration-none mb-3">
              <h2 className="card-header">
                  Mains
              </h2>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={dishesIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Main 1</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={dishesIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Main 2</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={dishesIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Main 3</h3></li>
              </ul>
          </div>
      </section>
      <section id='dessert'>
          <div className="card text-body text-decoration-none mb-3">
              <h2 className="card-header">
                  Desserts
              </h2>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={dessertIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Dessert 1</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={dessertIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Dessert 2</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={dessertIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Dessert 3</h3></li>
              </ul>
          </div>
      </section>
    </div>
  );
}
