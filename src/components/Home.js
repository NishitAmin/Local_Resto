import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';
import image2 from '../home_page1.jpg';
import image1 from '../home_page2.jpg';
import image3 from '../home_page3.jpg';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBarMenu />
        <Container>
          <br />
          <br />
          <h1>
            <em>Let's take you through the journey!</em>
          </h1>
          <br />
          <p></p>
          <img src={image1} width="550" height="300" alt="Loading..." />
          <br />
          <br />
          <br />
          <Row>
            <Col></Col>
            <Col xs={9}>
              <p>
                The opportunity to deliver a human experience starts with your
                hosts and servers—they’re the ones that your guests will engage
                with as soon as they walk in and throughout their meal. Guests
                want sincerity and positivity; someone that’s as excited to
                serve them as they are to be enjoying a meal out.
              </p>
            </Col>
            <Col></Col>
          </Row>
          <br />
          <br />
          <h2>Friendly, personalized service</h2>
          <br />
          <p></p>
          <img src={image2} width="300" height="200" alt="Loading..." />
          <br />
          <br />
          <br />
          <Row>
            <Col></Col>
            <Col xs={9}>
              <p>
                The opportunity to deliver a human experience starts with your
                hosts and servers—they’re the ones that your guests will engage
                with as soon as they walk in and throughout their meal. Guests
                want sincerity and positivity; someone that’s as excited to
                serve them as they are to be enjoying a meal out.
              </p>
            </Col>
            <Col></Col>
          </Row>
          <br />
          <br />
          <h2>Consistently great food</h2>
          <br />
          <p></p>
          <img src={image3} width="540" height="250" alt="Loading..." />
          <br />
          <br />
          <br />
          <Row>
            <Col></Col>
            <Col xs={9}>
              <p>
                When food both looks and tastes good, your guests are bound to
                enjoy their restaurant experience more than if you didn’t focus
                on presentation at all. Based on the study findings, you could
                even increase the price of your menu items without scaring
                customers away.
              </p>
              <br />
              <br />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
