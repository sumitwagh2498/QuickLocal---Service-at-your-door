import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Style } from '../Style/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <Container>
          <Row>
            <Col sm={6} md={3} className="item">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Sewing and Stitching Service</a></li>
                <li><a href="#">Electrical Repair Service</a></li>
                <li><a href="#">Pipe Installation and Repair Service</a></li>
              </ul>
            </Col>
            <Col sm={6} md={3} className="item">
              <h3>About</h3>
              <ul>
                <li><a href="#">Company : QuickLocal</a></li>
                <li><a href="#">Team : 5 Group of Team</a></li>
                <li><a href="#">Career : 2023</a></li>
              </ul>
            </Col>
            <Col md={6} className="item text">
              <h3>QuickLocal</h3>
              <p>
              QuickLocal is an Indian multinational Service Providing Company, based in Gurugram. As of March 2023, Lenskart has more than 2,000 retail stores, three-fourths of which are in India. Its manufacturing facility in New Delhi manufactures 3 lakh glasses a month. Lenskart is building an automated factory in Bhiwadi, Rajasthan, with an annual production capacity of 5 crore.
              </p>
            </Col>
            <Col className="item-social">
              <a href="#">
                <i className="icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </i>
              </a>
              <a href="#">
                <i className="icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </i>
              </a>
              <a href="#">
                <i className="icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </i>
              </a>
              <a href="#">
                <i className="icon">
                  <FontAwesomeIcon icon={faYoutube} />
                </i>
              </a>
            </Col>
          </Row>
          <p className="copyright">QuickLocal © 2023</p>
        </Container>
      </footer>
    </div>
  );
};