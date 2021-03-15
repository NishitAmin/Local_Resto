import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faHome,
  faList,
  faPlus,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

class NavBarMenu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#home">
              <Link to="/list">
                <FontAwesomeIcon icon={faList} /> List
              </Link>
            </Nav.Link>
            <Nav.Link href="#home">
              <Link to="/create">
                <FontAwesomeIcon icon={faPlus} /> Create
              </Link>
            </Nav.Link>
            <Nav.Link href="#home">
              <Link to="/search">
                <FontAwesomeIcon icon={faSearch} /> Search
              </Link>
            </Nav.Link>
            {localStorage.getItem('login') ? (
              <Nav.Link href="#home">
                <Link to="/logout">
                  <FontAwesomeIcon icon={faUser} /> Logout
                </Link>
              </Nav.Link>
            ) : (
              <Nav.Link href="#home">
                <Link to="/login">
                  <FontAwesomeIcon icon={faUser} /> Login
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBarMenu;
