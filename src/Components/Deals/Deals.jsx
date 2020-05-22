import React, { useState, useEffect } from 'react';
import BuildInCarousel from '../BuildInCarousel';

import priceIcon from '../../Icons/price.png';

export default function Deals() {
  const [lunch, setLunch] = useState([]);
  const [pos1, setPos1] = useState({});
  const [pos2, setPos2] = useState({});
  const [pos3, setPos3] = useState({});

  
  async function fetchData(type) {
    console.log('fetchData');
    const response = await fetch("http://localhost:5000/api/day_lunch", {
      type: 'GET',
    });
    response
      .json()
      .then(({lunch_set}) => {
        setPos1(lunch_set.position_1);
        setPos2(lunch_set.position_2);
        setPos3(lunch_set.position_3)
      })
  };

  useEffect(() => {
      fetchData();
  }, []);

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
              <li className="list-group-item d-flex flex-column align-items-center justify-content-center">
                <img src={"http://localhost:5000" + pos1.image} alt="..." className="img-fluid w-25"/>
                <div>
                  <h3>{pos1.name}</h3>
                  <p>Price: {pos1.price}</p>
                </div>
              </li>
              <li className="list-group-item d-flex flex-column align-items-center justify-content-center">
                <img src={"http://localhost:5000" + pos2.image} alt="..." className="img-fluid w-25"/>
                <div>
                  <h3>{pos2.name}</h3>
                  <p>Price: {pos2.price}</p>
                </div>
              </li>
              <li className="list-group-item d-flex flex-column align-items-center justify-content-center">
                <img src={"http://localhost:5000" + pos3.image} alt="..." className="img-fluid w-25"/>
                <div>
                  <h3>{pos3.name}</h3>
                  <p>Price: {pos3.price}</p>
                </div>
              </li>
          </ul>
      </div>
      <div className="text-center mb-3">
          <button type="button" className="btn btn-light btn-lg border"><h3 className="mt-1">Order</h3></button>
      </div>
      <BuildInCarousel imgArray={[
        "https://via.placeholder.com/256x128?text=Mon",
        "https://via.placeholder.com/256x128?text=Tue",
        "https://via.placeholder.com/256x128?text=Wed",
        "https://via.placeholder.com/256x128?text=Thu",
        "https://via.placeholder.com/256x128?text=Fri",
        "https://via.placeholder.com/256x128?text=Sat",
        "https://via.placeholder.com/256x128?text=Sun"
      ]} />
    </div>
  );
}
