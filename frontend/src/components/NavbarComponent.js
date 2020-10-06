import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const NavbarComponent = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">Favorite number</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Main</Nav.Link>
          <Nav.Link href="/voting">Voting</Nav.Link>
          <Nav.Link href="/logs">Logs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
