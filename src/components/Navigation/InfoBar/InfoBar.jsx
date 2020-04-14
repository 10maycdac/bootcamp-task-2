import React from 'react';

import { Nav, Navbar } from 'react-bootstrap'

const infobar = (props) => (
    <React.Fragment>
        <Navbar bg="light">

            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                <Nav className="mr-auto">
                    <Nav.Link href="#home" className="mr-5">All Products</Nav.Link>
                    <Nav.Link href="#home" className="mr-5">Products List</Nav.Link>
                </Nav>

                <Nav >
                    <Nav.Link
                        href="#home"
                        style={{
                            borderBottom: "3px solid #239AC5"
                        }}
                    >
                        Edit Product Catalog
                    </Nav.Link>
                </Nav>

            </Navbar.Collapse>

        </Navbar>
    </React.Fragment>
);

export default infobar;