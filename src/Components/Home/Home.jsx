import React from 'react';
import { Link } from "react-router-dom";

import saleIcon from '../../Icons/sale.png';
import hotIcon from '../../Icons/hot.png';
import newIcon from '../../Icons/new.png';
import saladIcon from '../../Icons/salad.png';
import soupIcon from '../../Icons/soup.png';
import dishesIcon from '../../Icons/dishes.png';
import drinksIcon from '../../Icons/drinks.png';
import recomendedIcon from '../../Icons/recomended.png';

export default function Home() {
  return (
    <div className="container text-center w-75 p-3">
      <Link to="/deals">
          <div className="card text-body mb-3">
              <div className="card-body d-flex align-items-center justify-content-center">
                  <img src={saleIcon} className="card-img-top img-fluid w-25 m-2" alt="..."/>
                  <h3 className="card-title mt-3">Special Offer</h3>
              </div>
          </div>
      </Link>

      <div className="card mb-3">
          <div className="card-body d-flex align-items-center justify-content-around">
              <Link to="/menu">
                  <img src={hotIcon} className="card-img-top img-fluid w-50" alt="..."/>
              </Link>
              <Link to="/drinks">
                  <img src={newIcon} className="card-img-top img-fluid w-50" alt="..."/>
              </Link>
              <Link to="/about">
                  <img src={recomendedIcon} className="card-img-top img-fluid w-50" alt="..."/>
              </Link>
          </div>
      </div>
      <Link to="/lunch">
          <div className="card text-body text-decoration-none mb-3">
              <h2 className="card-header">
                  Build Your Lunch
              </h2>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={saladIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Choose Salad</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={soupIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Choose Soupe</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={dishesIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Choose Dishes</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={drinksIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Choose Drinks</h3></li>
              </ul>
          </div>
      </Link>
    </div>
  );
}
