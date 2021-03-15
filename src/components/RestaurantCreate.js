import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

class RestaurantCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      address: null,
      rating: null,
      email: null,
    };
  }
  create() {
    fetch(
      'http://localhost:3000/restaurant',
      {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      }
    ).then((result) => {
      result.json().then((response) => {
        alert('Added');
      });
    });
  }
  render() {
    return (
      <div>
        <NavBarMenu />
        <br />
        <br />
        <h1>Create Restaurant</h1>
        <br />
        <br />
        <br />
        <Container>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm={5}>
                Name
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={(event) => {
                    this.setState({ name: event.target.value });
                  }}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={5}>
                Address
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  onChange={(event) => {
                    this.setState({ address: event.target.value });
                  }}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={5}>
                Rating
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="Rating"
                  onChange={(event) => {
                    this.setState({ rating: event.target.value });
                  }}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={5}>
                Email
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={(event) => {
                    this.setState({ email: event.target.value });
                  }}
                />
              </Col>
            </Form.Group>
            <br />

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 1 }}>
                <Button
                  onClick={() => {
                    this.create();
                  }}
                >
                  Add Restaurant
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}

export default RestaurantCreate;
