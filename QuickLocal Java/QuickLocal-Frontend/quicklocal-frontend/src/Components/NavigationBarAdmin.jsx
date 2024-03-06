import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { AdminReg } from "./AdminReg";
import { UserReg } from "./UserReg";
import styles from "../Style/NavigationBar.css";

export function NavigationBarAdmin() {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
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
            <LinkContainer to="/admin-dashboard">
              <Nav.Link className="tabs">Pending</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/service-approved">
              <Nav.Link className="tabs">Approved</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/primemum">
              <Nav.Link className="tabs">Primemum</Nav.Link>
            </LinkContainer>
            <Button variant="outline-danger" onClick={handleLogoutClick} style={{marginLeft: '550px'}}>
            Logout
          </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
