// ServiceProviderLogin.jsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Style/adminLogin.css';
import NavigationBar from './NavigationBar';

export function ServiceProviderLogin() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9191/service/login', credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.status) {
        // Login successful
        console.log(response.data);
        console.log('Service login successful');
        sessionStorage.setItem('serviceProvider',response.data.userId);
        // Redirect to the desired page after successful login
        navigate('/service-provider-dashboard'); // Change '/dashboard' to the desired route
      } else {
        // Login failed
        console.error('Service login failed');
        // Handle login failure, if needed
      }
    } catch (error) {
      // Handle other errors
      console.error('Error during login:', error);
    }
  };

  return (
    <>
    <NavigationBar/>
    <div className="login-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </Form.Group>
        <p>
          <Link to="/ServiceProviderReg" className="text-muted" style={{ fontSize: '12px', color: 'blue' }}>
            Create your account.
          </Link>
        </p>
        <Button type="submit" className="btn btn-primary btn-block">
          Login
        </Button>
      </Form>
    </div>
    </>
  );
}
