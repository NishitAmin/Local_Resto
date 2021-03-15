import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import NavBarMenu from './NavBarMenu';

class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    this.data();
  }

  data() {
    fetch(
      'http://localhost:3000/restaurant'
    ).then((response) => {
      response.json().then((result) => {
        this.setState({ list: result });
      });
    });
  }

  delete(id) {
    fetch(
      'http://localhost:3000/restaurant' + id,
      {
        method: 'Delete',
      }
    ).then((result) => {
      result.json().then((response) => {
        alert('Deleted');
        this.data();
      });
    });
  }

  render() {
    return (
      <div>
        <NavBarMenu />
        <br />
        <h1>Restaurant's List</h1>
        <br />
        <Container>
          {this.state.list ? (
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Rating</th>
                    <th>Email</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.list.map((item, i) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.rating}</td>
                      <td>{item.email}</td>
                      <td>
                        <Link to={'/update/' + item.id}>
                          <FontAwesomeIcon icon={faEdit} />
                        </Link>
                        &nbsp;
                        <span onClick={() => this.delete(item.id)}>
                          <FontAwesomeIcon icon={faTrash} color="black" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <p>PLease Wait...</p>
          )}
        </Container>
      </div>
    );
  }
}

export default RestaurantList;
