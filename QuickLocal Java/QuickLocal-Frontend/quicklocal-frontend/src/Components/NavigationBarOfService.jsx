import React from "react";
import { Container, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { AdminReg } from "./AdminReg";
import { UserReg } from "./UserReg";
import styles from "../Style/NavigationBar.css";

export function NavigationBarOfService() {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="nav-navbar">
      <Container>
        <LinkContainer to="/home">
          <Navbar.Brand>
            <h4 className="logo"><span className="q">Q</span>uickLocal</h4>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-text">
            <LinkContainer to="/service-provider-dashboard">
              <Nav.Link className="tabs">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link className="tabs">My Service</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/provider-form">
              <Nav.Link className="tabs">Form</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/orders">
              <Nav.Link className="tabs">User Orders</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/help">
              <Nav.Link className="tabs">Help</Nav.Link>
            </LinkContainer>
            <Button variant="outline-danger" onClick={handleLogoutClick} style={{marginLeft: '400px'}}>
            Logout
          </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBarOfService;