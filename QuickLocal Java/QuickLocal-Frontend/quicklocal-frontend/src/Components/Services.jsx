import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import NavigationBarOfUser from './NavigationBarOfUser'; 
import OrderForm from './OrderForm';

function Services() {
  const [services, setServices] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchCity, setSearchCity] = useState('');
  const [showOrderForm, setShowOrderForm] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:9191/services/all')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const handleAddClick = () => {
    setShowOrderForm(true);
  };

  const handleSearchChange = (e) => {
    setSearchCity(e.target.value);
  };

  const handleSearch = () => {
    // Filter services based on the entered city
    const filteredServices = services.filter(service => service.city.toLowerCase() === searchCity.toLowerCase());
    setSearchResults(filteredServices);
  };

  const renderCards = () => {
    const dataToRender = searchResults.length > 0 ? searchResults : services;

    return (
      <Row xs={1} md={3} className="g-4">
        {dataToRender.map((service, idx) => (
          <Col key={idx} className="mb-3">
            <Card style={{ 
              border: '1px solid rgba(0, 0, 0, 0.2)',
              borderRadius: '20px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
              width: '16rem',
              height: 'auto',
              margin: '10px' 
            }} className="mx-auto my-4 card">
              <Card.Body style={{ padding: '20px' }}>
                <Card.Title style={{ 
                  fontSize: '1.5rem',
                  marginBottom: '10px',
                  color: '#fff',
                  borderRight: '10px',
                  width: '100%',
                  backgroundColor: '#007bff',
                 
                  padding: '10px 20px',
                  textAlign: 'center'
                }}>{service.service}</Card.Title>
                <Card.Text style={{ fontSize: '1rem', color: '#333' }}>
                  <strong>Name:</strong> {service.name}<br />
                  <strong>Phone:</strong> {service.phone}<br />
                  <strong>Address:</strong> {service.address}<br />
                  <strong>City:</strong> {service.city}<br />
                </Card.Text>
                <Link to="/order-form" className="btn btn-primary mx-auto mt-2" style={{ width: '100%', marginTop: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', display: 'inline-block', transition: 'background-color 0.3s ease-in-out' }}>Book</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <Container fluid>
      <NavigationBarOfUser setSearchResults={handleSearchResults} />
      <div className="text-center mt-4">
        <div className="mx-auto" style={{ width: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <input type="text" value={searchCity} onChange={handleSearchChange} className="form-control mb-2" placeholder="Search by City" style={{ borderRadius: '20px', height: '46px', marginRight: '7px' }} />
          <Button onClick={handleSearch} className="btn btn-primary" style={{ width: '30%', borderRadius: '20px' }}>Search</Button>
        </div>
        {renderCards()}
      </div>
      {showOrderForm && <OrderForm />}
    </Container>
  );  
}

export default Services;
