import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

function NavigationBarOfUser() {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="nav-navbar" style={{ width: "100%" }}>
      <Container>
        <LinkContainer to="/home">
          <Navbar.Brand>
            <h4 className="logo"><span className="q">Q</span>uickLocal</h4>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-text">
            <LinkContainer to="/user-dashboard">
              <Nav.Link className="tabs">Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/booked-service">
              <Nav.Link className="tabs">Booked!</Nav.Link>
            </LinkContainer>
          </Nav>
          <Button variant="outline-danger" onClick={handleLogoutClick} style={{ marginLeft: '5px' }}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBarOfUser;
