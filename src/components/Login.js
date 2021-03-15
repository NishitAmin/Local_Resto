import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavBarMenu from './NavBarMenu';
import login_gif from '../login_page.gif';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  login() {
    fetch(
      'http://localhost:3000/login?username=' +
        this.state.username +
        '&password=' +
        this.state.password
    ).then((data) => {
      data.json().then((response) => {
        if (response.length > 0) {
          localStorage.setItem('login', JSON.stringify(response));
          console.log(this.props.history.push('list'));
        } else {
          alert('Invalid Credentials! Please try again.');
        }
      });
    });
  }

  register() {
    console.log(this.props.history.push('/register'));
  }

  render() {
    return (
      <div>
        <NavBarMenu />
        <Container>
          <div>
            <br />
            <h1>Get Started!</h1>
            <br />
            <img src={login_gif} alt="Loading..." />
            <Row>
              <Col></Col>
              <Col xs={4}>
                <br />
                <input
                  name="username"
                  type="text"
                  style={{ width: '100%' }}
                  placeholder="Username!"
                  onChange={(event) =>
                    this.setState({ username: event.target.value })
                  }
                />
                <br />
                <br />
                <input
                  name="password"
                  type="password"
                  style={{ width: '100%' }}
                  placeholder="Password!"
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                />
                <br />
                <br />
                <Button
                  onClick={() => {
                    this.login();
                  }}
                >
                  Login
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  onClick={() => {
                    this.register();
                  }}
                >
                  Register
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Login;
