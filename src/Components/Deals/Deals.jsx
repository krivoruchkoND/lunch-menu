import React from 'react';
import BuildInCarousel from '../BuildInCarousel';

import priceIcon from '../../Icons/price.png';
import saladIcon from '../../Icons/salad.png';
import soupIcon from '../../Icons/soup.png';
import dishesIcon from '../../Icons/dishes.png';
import drinksIcon from '../../Icons/drinks.png';

export default function Deals() {
  return (
    <div className="container w-75 p-3">
      <div className="card text-body mb-3">
          <div className="card-body d-flex align-items-center justify-content-center">
              <img src={priceIcon} className="card-img-top img-fluid w-25 m-2" alt="..."/>
              <h3 className="card-title mt-3">Lunch of the Day</h3>
          </div>
      </div>
      <div className="card text-body text-decoration-none mb-3">
          <ul className="list-group list-group-flush text-center">
              <li className="list-group-item d-flex flex-column align-items-center justify-content-center"><img src={saladIcon} alt="..." className="img-fluid w-25"/><h3>Salad Name</h3></li>
              <li className="list-group-item d-flex flex-column align-items-center justify-content-center"><img src={soupIcon} alt="..." className="img-fluid w-25"/><h3>Soup Name</h3></li>
              <li className="list-group-item d-flex flex-column align-items-center justify-content-center"><img src={dishesIcon} alt="..." className="img-fluid w-25"/><h3>Main Course Name</h3></li>
              <li className="list-group-item d-flex flex-column align-items-center justify-content-center"><img src={drinksIcon} alt="..." className="img-fluid w-25"/><h3>Drink Name</h3></li>
          </ul>
      </div>
      <div className="text-center mb-3">
          <button type="button" className="btn btn-light btn-lg border"><h3 className="mt-1">Order</h3></button>
      </div>
      <BuildInCarousel imgArray={[
        "https://via.placeholder.com/512x256?text=Mon",
        "https://via.placeholder.com/512x256?text=Tue",
        "https://via.placeholder.com/512x256?text=Wed",
        "https://via.placeholder.com/512x256?text=Thu",
        "https://via.placeholder.com/512x256?text=Fri",
        "https://via.placeholder.com/512x256?text=Sat",
        "https://via.placeholder.com/512x256?text=Sun"
      ]} />
    </div>
  );
}
