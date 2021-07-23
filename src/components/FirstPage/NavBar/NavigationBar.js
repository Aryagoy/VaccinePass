import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavLink,
  Dropdown,
  NavItem,
} from "react-bootstrap";
import Logo from "../../../assets/logo.jpg";

import classes from "./NavigationBar.module.css";

function NavigationBar(props) {
  return (
    <React.Fragment>
      <Navbar
        className="mb-3"
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="light"
        variant="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <NavLink to="/">
                <img src={Logo} alt="logo" height="40" width="100"></img>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <NavItem className={classes.help} href="#">
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0d159c"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <span>Help</span>
        </NavItem>
        <Dropdown className="d-inline mx-2" autoClose="inside">
          <Dropdown.Toggle
            variant="outline-primary"
            id="dropdown-autoclose-inside"
          >
            English
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">French</Dropdown.Item>
            <Dropdown.Item href="#">English</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Account/Profile
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="">Account</Dropdown.Item>
            <Dropdown.Item href="">Profile</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>

      <div className={classes.nav2}>
        <Navbar
          collapseOnSelect
          className={classes.nav}
          expand="sm"
          variant="light"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="">
                  <h4 className={classes.navitem}> Nav Item</h4>
                </Nav.Link>
                <Nav.Link href="">
                  <h4 className={classes.navitem}> Nav Item</h4>
                </Nav.Link>
                <Nav.Link href="">
                  <h4 className={classes.navitem}> Nav Item</h4>
                </Nav.Link>
                <Nav.Link href="">
                  <h4 className={classes.navitem}> Nav Item</h4>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </React.Fragment>
  );
}

export default NavigationBar;
