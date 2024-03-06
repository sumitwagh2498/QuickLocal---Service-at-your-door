import React from "react";
import { Container, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
// Import your components here
import { AdminReg } from "../Components/AdminReg";
import { UserReg } from "../Components/UserReg";
import styles from "../Style/NavigationBar.css";

 function NavigationBar() {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    // Replace 'logout' with the actual logout function
    // logout();
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="nav-navbar">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <h4 className="logo"><span className="q">Q</span>uickLocal</h4>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-text">
            <LinkContainer to="/">
              <Nav.Link className="tabs">Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/service">
              <Nav.Link className="tabs">Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="tabs">About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="tabs">Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <NavDropdown title="Login" id="basic-nav-dropdown" className="login-dropdown">
              {/* Update the routes for AdminReg and UserReg components */}
              <NavDropdown.Item onClick={() => navigate("/admin-login")}>Admin</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/user-login")}>User</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/service-provider-login")}>Service Provider</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;