import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavList from '../NavList/NavList';
import SignIn from '../SignIn/SignIn';

import userIcon from './user.svg';

import './Header.css';

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <span ref={ref} onClick={(e) => { e.preventDefault(); onClick(e); }}>
          {children}
        </span>
      ));
    return (
        <Navbar collapseOnSelect expand="md" className="flex-md-row-reverse px-0">
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggle"/>
            <Navbar.Brand className="d-md-none">
                <Link to="/home">lunch menu</Link> 
            </Navbar.Brand>
            <Dropdown drop={'left'}>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    <img src={userIcon} alt="login icon" className="login-icon"/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={handleShow}>Sign In</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <SignIn show={show} handleClose={handleClose}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <NavList />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
