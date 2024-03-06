
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { RiMacbookLine, RiStore3Line, RiDatabase2Line, RiPaletteLine, RiAndroidLine, RiAccountBoxLine, RiHandCoinLine, RiEnglishInput } from 'react-icons/ri';
import { NavigationBarOfService } from './NavigationBarOfService';
import style from '../Style/HomeSp.css';

const ServiceHome = () => {
    return (
      <>
        <NavigationBarOfService />
        <Container>
          <h2 style={{ textAlign: 'center', marginTop: '' }}>Our Services</h2>
          <Row className="row service-row">
            <Col className="service">
              <RiMacbookLine />
              <h3>Pest Control Services</h3>
              <p>Safeguard your space from pests with effective pest control services.</p>
            </Col>
            <Col className="service">
              <RiStore3Line />
              <h3>Marketing</h3>
              <p>Transform your ideas into visual masterpieces with expert.</p>
            </Col>
            <Col className="service">
              <RiDatabase2Line />
              <h3>Cleaning Services</h3>
              <p>Enjoy a spotless home or office with professional cleaning services.</p>
            </Col>
            <Col className="service">
              <RiPaletteLine />
              <h3>Graphic Design</h3>
              <p>Transform your ideas into visual masterpieces with expert.</p>
            </Col>
            {/* Second Row */}
            <Col className="service">
              <RiAndroidLine />
              <h3>Auto Repair Services</h3>
              <p>Trust experienced auto mechanics for reliable vehicle repairs, maintenance, and diagnostics.</p>
            </Col>
            <Col className="service">
              <RiAccountBoxLine />
              <h3>Landscaping Services</h3>
              <p>Transform your outdoor space with landscaping and lawn care.</p>
            </Col>
            <Col className="service">
              <RiHandCoinLine />
              <h3>Plumbing Services</h3>
              <p>Fix leaks, repair pipes, and install plumbing fixtures with expert plumbing services.</p>
            </Col>
            <Col className="service">
              <RiEnglishInput />
              <h3>Electrician Services</h3>
              <p>Ensure electrical safety and functionality with professional electricians.</p>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
export default ServiceHome;
