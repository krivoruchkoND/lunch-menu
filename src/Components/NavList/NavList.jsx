import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

import './NavList.css';

const NavList = (props) => {
    return (
        <Nav className={props.className}>
            <Nav.Item className="btn btn-light m-1 p-0">
                <Nav.Link className="link-color" eventKey="1" as={Link} to="/deals">
                    today's deals
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="btn btn-light m-1 p-0">
                <Nav.Link className="link-color" eventKey="1" as={Link} to="/lunch">
                    business lunch
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="btn btn-light m-1 p-0">
                <Nav.Link className="link-color" eventKey="1" as={Link} to="/menu">
                    menu
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="btn btn-light m-1 p-0">
                <Nav.Link className="link-color" eventKey="1" as={Link} to="/drinks">
                    drinks
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="btn btn-light m-1 p-0">
                <Nav.Link className="link-color" eventKey="1" as={Link} to="/about">
                    about us
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavList;
