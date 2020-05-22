import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import './Menu.css';

export default function Menu() {
    const [showModal, setShowModal] = useState(false);
    const [dish, setDish] = useState({});
    const [soups, setSoups] = useState([]);
    const [hots, setHots] = useState([]);
    const [salads, setSalads] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [snacks, setSnacks] = useState([]);

    const handleShow = (id) => {
        fetchDish(id);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const setter = (type, data) => {
        switch(type){
            case 'soup': setSoups(data); break;
            case 'hot': setHots(data); break;
            case 'salad': setSalads(data); break;
            case 'drink': setDrinks(data); break;
            case 'snack': setSnacks(data); break;
            default: return;
        }
    }

    async function fetchDish(id) {
        console.log('fetchDish');
        const response = await fetch(`http://localhost:5000/api/dishes/${id}`, {
          type: 'GET',
        });
        response
          .json()
          .then(res => {
            setDish(res);
          })
    };

    async function fetchData(type) {
        console.log('fetchData');
        const response = await fetch(`http://localhost:5000/api/dishes?type=${type}`, {
          type: 'GET',
        });
        response
          .json()
          .then(res => {
              setter(type, res);
          })
    };

    useEffect(() => {
        fetchData('soup');
        fetchData('hot');
        fetchData('salad');
        fetchData('drink');
        fetchData('snack');
    }, []);

    const DishModal = (props) => {
        return(
            <Modal show={props.show} onHide={props.handleClose} animation={false}>
                <Modal.Header closeButton >
                <Modal.Title>{dish.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card style={{ width: '18rem' }} className="mx-auto mb-2">
                        <Card.Img variant="top" src={"http://localhost:5000" + dish.image} />
                        <Card.Body>
                            <Card.Text>
                                <p>{dish.description}</p>
                                <p>Price: {dish.price}</p>
                                <p>Rating: {dish.rating}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {dish.reviews ? dish.reviews.map((review, i) => (
                        <Card style={{ width: '20rem' }} className="mx-auto mb-2" key={i}>
                            <Card.Body>
                                <Card.Title>{review.added_by} Rate - {review.mark}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{review.created_at}</Card.Subtitle>
                                <Card.Text>
                                    {review.comment}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )) : null}
                </Modal.Body>
            </Modal>
        );
    }

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
                        <a className="nav-link" href='#snacks'><h3>Snacks</h3></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='#drinks'><h3>Drinks</h3></a>
                    </li>
                </ul>
            </nav>
            <section id='salads'>
                <div className="card text-body text-decoration-none mb-3">
                    <h2 className="card-header">
                        Salads
                    </h2>
                    <ul className="list-group list-group-flush">
                        { salads.map((salad,i) => (
                            <li onClick={(e) => handleShow(salad.id, e)} key={i} className="list-group-item d-flex align-items-center justify-content-center">
                                <img id={salad.id} src={"http://localhost:5000" + salad.image} alt="..." className="img-fluid w-25 mr-4"/>
                                <div>
                                    <h3>{salad.name}</h3>
                                    <p>Price: {salad.price}</p>
                                    <img src={salad.image}/>
                                </div>
                            </li>
                        )) }
                    </ul>
                </div>
            </section>
            <section id='soups'>
                <div className="card text-body text-decoration-none mb-3">
                    <h2 className="card-header">
                        Soups
                    </h2>
                    <ul className="list-group list-group-flush">
                        {soups.map((soup, i) => (
                            <li key={i} className="list-group-item d-flex align-items-center justify-content-center">
                                <img id={soup.id} src={"http://localhost:5000" + soup.image} alt="..." className="img-fluid w-25 mr-4"/>
                                <div>
                                    <h3>{soup.name}</h3>
                                    <p>Price: {soup.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section id='mains'>
                <div className="card text-body text-decoration-none mb-3">
                    <h2 className="card-header">
                        Mains
                    </h2>
                    <ul className="list-group list-group-flush">
                        { hots.map((hots,i) => (
                            <li key={i} className="list-group-item d-flex align-items-center justify-content-center">
                                <img id={hots.id} src={"http://localhost:5000" + hots.image} alt="..." className="img-fluid w-25 mr-4"/>
                                <div>
                                    <h3>{hots.name}</h3>
                                    <p>Price: {hots.price}</p>
                                </div>
                            </li>
                        )) }
                    </ul>
                </div>
            </section>
            <section id='snacks'>
                <div className="card text-body text-decoration-none mb-3">
                    <h2 className="card-header">
                        Snacks
                    </h2>
                    <ul className="list-group list-group-flush">
                        { snacks.map((snack,i) => (
                            <li key={i} className="list-group-item d-flex align-items-center justify-content-center">
                                <img id={snack.id} src={"http://localhost:5000" + snack.image} alt="..." className="img-fluid w-25 mr-4"/>
                                <div>
                                    <h3>{snack.name}</h3>
                                    <p>Price: {snack.price}</p>
                                </div>
                            </li>
                        )) }
                    </ul>
                </div>
            </section>
            <section id='drinks'>
                <div className="card text-body text-decoration-none mb-3">
                    <h2 className="card-header">
                        Drinks
                    </h2>
                    <ul className="list-group list-group-flush">
                        { drinks.map((drink,i) => (
                            <li key={i} className="list-group-item d-flex align-items-center justify-content-center">
                                <img id={drink.id} src={"http://localhost:5000" + drink.image} alt="..." className="img-fluid w-25 mr-4"/>
                                <div>
                                    <h3>{drink.name}</h3>
                                    <p>Price: {drink.price}</p>
                                </div>
                            </li>
                        )) }
                    </ul>
                </div>
            </section>
            <DishModal show={showModal} handleClose={handleClose}/>
        </div>
    );
}
