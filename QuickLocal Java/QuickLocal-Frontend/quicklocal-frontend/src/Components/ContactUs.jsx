import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import pic from "../Images/Contact/contact.jpg";
import style from "../Style/Contact.css"; 
import NavigationBar from './NavigationBar';

export function ContactUs() {
  const handleSubmit = () => {
  };

  return (
    <>
    <NavigationBar/>
    <Row className="align-items-center" style={{ marginTop: '35px', marginBottom: '35px' }}>
      {/* Column for the image */}
      <Col lg={6}>
        <div className="card-shadow">
          <img src={pic} className="img-fluid" alt="Contact" style={{ maxWidth: '100%', height: '360px', width: '635px', marginLeft: '5px' }} />
        </div>
      </Col>

      {/* Column for the form */}
      <Col lg={6} className="contact-box ml-3" style={{paddingBottom:'15px'}}>
        <h1 className="font-weight-light mt-2">Quick Contact</h1>
        <form className="mt-4">
          <Row>
            <Col lg={12}>
              <div className="form-group mt-2">
                <input className="form-control" type="text" placeholder="Name" />
              </div>
            </Col>
            <Col lg={12}>
              <div className="form-group mt-2">
                <input className="form-control" type="email" placeholder="Email Address" />
              </div>
            </Col>
            <Col lg={12}>
              <div className="form-group mt-2">
                <input className="form-control" type="text" placeholder="Phone" />
              </div>
            </Col>
            <Col lg={12}>
              <div className="form-group mt-2">
                <textarea className="form-control" rows="3" placeholder="Message"></textarea>
              </div>
            </Col>
            <Col lg={12}>
              <Button
                type="submit"
                className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                onClick={handleSubmit}
              >
                SUBMIT
              </Button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
    </>
  );
}
