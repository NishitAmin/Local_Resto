import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';

class RestaurantUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      address: null,
      rating: null,
      email: null,
      id: null,
    };
  }

  componentDidMount() {
    fetch(
      'http://localhost:3000/restaurant/' +
        this.props.match.params.id
    ).then((response) => {
      response.json().then((result) => {
        console.log(result);
        this.setState({
          name: result.name,
          address: result.address,
          id: result.id,
          rating: result.rating,
          email: result.email,
        });
      });
    });
  }

  update() {
    fetch(
      'http://localhost:3000/restaurant/' +
        this.state.id,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      }
    ).then((result) => {
      result.json().then((response) => {
        alert('Updated');
      });
    });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <NavBarMenu />
        <br />
        <br />
        <h1>Restaurant Update</h1>
        <br />
        <br />
        <Container>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm={4}></Form.Label>
              <Col sm={4}>
                <Form.Control
                  onChange={(event) => {
                    this.setState({ name: event.target.value });
                  }}
                  placeholder="Restaurant name!"
                  value={this.state.name}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={4}></Form.Label>
              <Col sm={4}>
                <Form.Control
                  onChange={(event) => {
                    this.setState({ address: event.target.value });
                  }}
                  placeholder="Restaurant address!"
                  value={this.state.address}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={4}></Form.Label>
              <Col sm={4}>
                <Form.Control
                  onChange={(event) => {
                    this.setState({ rating: event.target.value });
                  }}
                  placeholder="Restaurant rating!"
                  value={this.state.rating}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={4}></Form.Label>
              <Col sm={4}>
                <Form.Control
                  onChange={(event) => {
                    this.setState({ email: event.target.value });
                  }}
                  placeholder="Restaurant email!"
                  value={this.state.email}
                />
              </Col>
            </Form.Group>

            <br />

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 1 }}>
                <Button
                  onClick={() => {
                    this.update();
                  }}
                >
                  Update Restaurant
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Container>
        <br />
      </div>
    );
  }
}

export default RestaurantUpdate;
