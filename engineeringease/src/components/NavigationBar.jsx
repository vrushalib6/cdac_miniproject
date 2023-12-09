import React from "react";
import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "./Images/Logo.jpeg"
import "./NavigationBar.css"; 


export function NavigationBar() {

  return (
    
    <Navbar expand="lg" className="bg-body-tertiary" bg="primary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" style={{ height: "80px", marginRight: "90px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/Home">
              <Nav.Link className="nav-link-custom">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Register">
              <Nav.Link className="nav-link-custom">Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/student-login">
              <Nav.Link className="nav-link-custom">Login</Nav.Link>
            </LinkContainer>
          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search tools"
              className="mr-2 search-input"
              aria-label="Search"
            />
            <Button variant="outline-success" className="search-button" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}