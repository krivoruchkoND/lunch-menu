import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavList from '../NavList/NavList';

const Footer = () => {
    return (
        <>
            <hr />
            <Row>
                <Col md="8" sm="8">
                    <p className='p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus veritatis voluptas fugiat nam natus aut perferendis. Quidem repellendus, dignissimos dolores dicta debitis ullam, officia voluptatum repudiandae facere, iusto tempora vel!</p>
                </Col>
                <Col md="4" sm="4">
                    <NavList className="flex-column text-center text-lg-right text-md-right text-sm-right" />
                </Col>
            </Row>
            <hr />
            <div className="text-center">
                <p className="mb-0">
                    Lunch Menu © 2020 All Rights Reserved
                </p>
                <p>
                    Developed by 
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/krivoruchkoND">
                        Krivoruchko Nikita
                    </a>
                </p>
            </div>
        </>
    )
}

export default Footer;
