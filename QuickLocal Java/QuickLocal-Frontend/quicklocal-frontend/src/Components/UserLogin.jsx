import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../Style/Login.css';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';


export function UserLogin() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userCredentials = {
      phone: phone,
      password: password
    };

    try {
      const response = await axios.post('http://localhost:9191/user/login', userCredentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.status) {
        console.log('User login successful');

        navigate('/user-dashboard');
      } else {
        console.error('User login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
    <NavigationBar/>
    <div className="login-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <p>
          <a href="/UserReg" className="text-muted" style={{ fontSize: `12px`, color: `blue` }}>
            Create your account.
          </a>
        </p>
        <Button type="submit" className="btn btn-primary btn-block hover-effect">
          Login
        </Button>
      </Form>
    </div>
    </>
  );
}
