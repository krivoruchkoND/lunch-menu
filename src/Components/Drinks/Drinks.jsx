import React from 'react';

import teaIcon from '../../Icons/tea.png';
import juiceIcon from '../../Icons/juice.png';
import sodaIcon from '../../Icons/soda.png';
import coffeeIcon from '../../Icons/coffee.png';

export default function Drinks() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm">
          <ul className="navbar-nav">
              <li className="nav-item">
                  <a className="nav-link" href='#tea'><h3>Tea</h3></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href='#coffee'><h3>Coffee</h3></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href='#soda'><h3>Soda</h3></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href='#juice'><h3>Juice</h3></a>
              </li>
          </ul>
      </nav>
      <section id='tea'>
          <div className="card text-body text-decoration-none mb-3">
              <h2 className="card-header">
                  Tea
              </h2>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={teaIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Tea 1</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={teaIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Tea 2</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={teaIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Tea 3</h3></li>
              </ul>
          </div>
      </section>
      <section id='coffee'>
          <div className="card text-body text-decoration-none mb-3">
              <h2 className="card-header">
                  Coffee
              </h2>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={coffeeIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Coffee 1</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={coffeeIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Coffee 2</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={coffeeIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Coffee 3</h3></li>
              </ul>
          </div>
      </section>
      <section id='soda'>
          <div className="card text-body text-decoration-none mb-3">
              <h2 className="card-header">
                  Soda
              </h2>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={sodaIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Soda 1</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={sodaIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Soda 2</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={sodaIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Soda 3</h3></li>
              </ul>
          </div>
      </section>
      <section id='juice'>
          <div className="card text-body text-decoration-none mb-3">
              <h2 className="card-header">
                  Juice
              </h2>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={juiceIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Juice 1</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={juiceIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Juice 2</h3></li>
                  <li className="list-group-item d-flex align-items-center justify-content-center"><img src={juiceIcon} alt="..." className="img-fluid w-25 mr-4"/><h3>Juice 3</h3></li>
              </ul>
          </div>
      </section>
    </div>
  );
}
