import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link  } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

import './Header.css'

const Header = () => {
    const Providers = useContext(AuthContext)
    const {user, logout} = Providers

    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to="/">Bike Paradise</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/bikes">Bikes</Nav.Link>
                    </Nav>

                    <Nav>
                        <Navbar.Text className="mx-3">
                            Signed in as: <span>{user.displayName || user.email}</span>
                        </Navbar.Text>
                        <Button as={Link} to="/Login" style = {{display: user?.email ? "none" : "block"}}variant="outline-primary">Login</Button>
                        {/* <Button as={Link} to="/adminLogin" style = {{display: user?.email ? "none" : "block"}}variant="outline-primary">Admin Login</Button> */}
                        {user?.email && <Button onClick={logout} variant="outline-primary">Logout</Button>}
                        {user.email ? <Button as={Link} to="/dashboard" variant="outline-primary">Dashboard</Button> : ""}
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    );
};

export default Header;