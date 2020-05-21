import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './SignIn.css';

const SignIn = (props) => {

    return(
        <Modal show={props.show} onHide={props.handleClose} animation={false}>
            <Modal.Header closeButton >
                <Modal.Title>Sign In or Create Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tabs defaultActiveKey="create" className="flex-row">
                    <Tab eventKey="create" title="Create Account">
                        <Form>
                            <Form.Group controlId="registerName" className="mt-2">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group controlId="registerEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="registerPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="registerPasswordConfirm">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mr-2">
                                Create Account
                            </Button>
                            <Button variant="secondary" onClick={props.handleClose}>
                                Close
                            </Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="signIn" title="Sign In">
                        <Form>
                            <Form.Group controlId="signInEmail" className="mt-2">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="signInPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mr-2">
                                Sign In
                            </Button>
                            <Button variant="secondary" onClick={props.handleClose}>
                                Close
                            </Button>
                        </Form>
                    </Tab>
                </Tabs>
            </Modal.Body>
        </Modal>
    );
}

export default SignIn;
