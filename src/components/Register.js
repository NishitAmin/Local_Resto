import React, { Component } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import logo from '../register_page.gif';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.checkpass = '';
  }
  newUser() {
    if (this.state.username.length < 4) {
      alert('Username cannot be less than 4 characters!');
    } else if (this.state.password.length < 6) {
      alert('Password should not be less than 6 characters!');
    } else {
      if (this.checkpass === this.state.password) {
        fetch('http://localhost:3000/login', {
          method: 'Post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state),
        }).then((result) => {
          result.json().then((response) => {
            alert('Thank you! You are registered.');
            console.log(this.props.history.push('login'));
          });
        });
      } else {
        alert('Passwords does not match! Please try again.');
      }
    }
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <h1>Registration Page</h1>
        <br />
        <img src={logo} alt="Loading..." width="260" height="190" />
        <br />
        <br />
        <br />
        <Container>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm={5}>
                Username:
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="Please enter your username!"
                  onChange={(event) => {
                    this.setState({ username: event.target.value });
                  }}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={5}>
                Password:
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="password"
                  placeholder="Please enter your password!"
                  onChange={(event) => {
                    this.setState({ password: event.target.value });
                  }}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={5}>
                Re-enter Password:
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="password"
                  placeholder="Please re-enter your password!"
                  onChange={(event) => {
                    this.checkpass = event.target.value;
                  }}
                />
              </Col>
            </Form.Group>
            <br />

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 1 }}>
                <Button
                  onClick={() => {
                    this.newUser();
                  }}
                >
                  Register me!
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Register;
