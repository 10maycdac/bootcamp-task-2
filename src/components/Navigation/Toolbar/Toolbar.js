import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons'; import { Navbar, Nav } from 'react-bootstrap'
// import classes from './Toolbar.module.css';
const toolbar = (props) => (
    <React.Fragment>
        <Navbar bg="light" expand="lg" className="border-bottom">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="#home" className="ml-2">
                Products
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav >
                    <Nav.Link href="#home" className="border-left">
                        <FontAwesomeIcon icon={faBell} />
                    </Nav.Link>
                    <Nav.Link href="#link" className="border-left">
                        <div className="row">
                            <div className="col"> <FontAwesomeIcon icon={faUserCircle} /> User's Name</div>
                        </div>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </React.Fragment>
);

export default toolbar;