import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import pic from '../Images/login.jpg';

function ServiceProviderReg() {
  const [service, setService] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    service: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({
      ...service,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Name validation: Check if the name contains only letters
    if (!/^[A-Za-z\s]+$/.test(service.name)) {
      setError('Name should not contain numeric or special characters.');
      return;
    }

   // Phone validation: Check if the phone contains only numeric digits and is exactly 10 digits
   if (!/^\d+$/.test(service.phone) || service.phone.length !== 10) {
    setError('Phone should contain exactly 10 numeric digits.');
    return;
  }

    // Email validation: Check if the email has a valid format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(service.email)) {
      setError('Invalid email format.');
      return;
    }

    // Password validation: Check if the password is not empty
    if (!service.password) {
      setError('Password cannot be empty.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:9191/service/register', service, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.status) {
        // Registration successful
        console.log('Service registration successful');

        // Redirect to the desired page after successful registration
        navigate('/service-provider-login');
      } else {
        // Registration failed
        setError('Service registration failed. Please check your inputs.');
      }
    } catch (error) {
      // Handle other errors
      console.error('Error during registration:', error);
      setError('An error occurred during registration. Please try again later.');
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="contact3 py-5">
        <h1 className="font-weight-light mt-2 text-center">Service Provider Registration</h1>
        <Container style={{ marginRight: 20, marginTop: 25 }}>
          <Row>
            <Col lg={4}>
              <div className="card-shadow" style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                <img src={pic} className="img-fluid" alt="Registration" style={{ overflow: 'hidden' }} />
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="contact-box ml-3">
                <Form className="mt-4" onSubmit={handleSubmit}>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Row>
                    <Col lg={12}>
                      <Form.Group className="mt-2">
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          name="name"
                          value={service.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group className="mt-2">
                        <Form.Control
                          type="email"
                          placeholder="Email Address"
                          name="email"
                          value={service.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group className="mt-2">
                        <Form.Control
                          type="text"
                          placeholder="Phone"
                          name="phone"
                          value={service.phone}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group className="mt-2">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={service.password}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group className="mt-2">
                        <Form.Control
                          type="text"
                          placeholder="Service"
                          name="service"
                          value={service.service}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Button
                        type="submit"
                        className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2 mx-auto d-block"
                        style={{ boxShadow: '0 5px 20px rgba(0,0,0,0.2)', marginTop: '25px' }}
                      >
                        <span>SIGN UP</span>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export { ServiceProviderReg };