import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import pic from "../Images/login.jpg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';

export function UserReg() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Name validation: Check if the name contains only letters
    if (!/^[A-Za-z\s]+$/.test(name)) {
      setError('Name should not contain numeric or special characters.');
      return;
    }

    // Phone validation: Check if the phone contains only numeric digits and is exactly 10 digits
    if (!/^\d+$/.test(phone) || phone.length !== 10) {
      setError('Phone should contain exactly 10 numeric digits.');
      return;
    }

    // Password validation: Check if the password is not empty
    if (!password) {
      setError('Password cannot be empty.');
      return;
    }

    try {
      const newUser = {
        name: name,
        phone: phone,
        password: password,
        address: address,
        pincode: pincode
      };

      const response = await axios.post('http://localhost:9191/user/register', newUser, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.status) {
        // Registration successful
        console.log('User registration successful');

        // Redirect to the login page after successful registration
        navigate('/user-login');
      } else {
        // Registration failed
        setError('User registration failed. Please check your inputs.');
      }
    } catch (error) {
      // Handle other errors
      console.error('Error during registration:', error);
      setError('An error occurred during registration. Please try again later.');
    }
  };

  return (
    <>
      <NavigationBar/>
      <div className="contact3 py-5">
        <h1 className="font-weight-light mt-2 text-center">User Registration</h1>
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
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group className="mt-2">
                        <Form.Control
                          type="text"
                          placeholder="Phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group className="mt-2">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group className="mt-2">
                        <Form.Control
                          type="text"
                          placeholder="Address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group className="mt-2">
                        <Form.Control
                          type="text"
                          placeholder="Pincode"
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
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