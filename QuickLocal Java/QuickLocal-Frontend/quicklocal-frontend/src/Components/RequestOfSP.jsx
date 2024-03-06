import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar, Container, Table, Button } from 'react-bootstrap';
import { NavigationBarAdmin } from './NavigationBarAdmin';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export function RequestOfSP() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9191/admin/pending-services')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  const handleApprove = (serviceId) => {
    axios.put(`http://localhost:9191/admin/approve/${serviceId}`)
      .then(response => {
        console.log(response.data);
        axios.get('http://localhost:9191/admin/pending-services')
          .then(response => setServices(response.data))
          .catch(error => console.error('Error fetching services:', error));
      })
      .catch(error => console.error('Error approving service:', error));
  };

  const handleDelete = (serviceId) => {
    axios.delete(`http://localhost:9191/admin/delete/${serviceId}`)
      .then(response => {
        console.log(response.data);
        setServices(prevServices => prevServices.filter(service => service.id !== serviceId));
      })
      .catch(error => console.error('Error deleting service:', error));
  };
  

  return (
    <>
      <NavigationBarAdmin />
      <Container>
        <h2 className="mt-3">Pending Services</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service.id}>
                <td>{service.name}</td>
                <td>{service.email}</td>
                <td>{service.phone}</td>
                <td>{service.service}</td>
                <td>{service.status}</td>
                <td>
                  <Button variant="success" onClick={() => handleApprove(service.id)}>Approve</Button>{' '}
                  <Button variant="danger" onClick={() => handleDelete(service.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
