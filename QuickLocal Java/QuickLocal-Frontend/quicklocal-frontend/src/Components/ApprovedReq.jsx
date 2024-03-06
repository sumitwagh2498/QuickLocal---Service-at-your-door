
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavigationBarAdmin } from './NavigationBarAdmin';

export function ApprovedReq() {
  const [serviceProviders, setServiceProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:9191/admin/all-services')
      .then(response => {
        setServiceProviders(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching service providers:', error);
        setError('An error occurred while fetching service providers. Please try again later.');
        setLoading(false);
      });
  }, []);

  const handleApprove = (serviceId) => {
    
  };

  const handleReject = (serviceId) => {
    
  };

  return (
    <>
      <NavigationBarAdmin />
      <div className="container">
        <h2 className="my-4">All Service Providers</h2>
        {loading && <p>Loading...</p>}
        {error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Service</th>
                
              </tr>
            </thead>
            <tbody>
              {serviceProviders.length > 0 ? (
                serviceProviders.map(provider => (
                  <tr key={provider.id}>
                    <td>{provider.name}</td>
                    <td>{provider.email}</td>
                    <td>{provider.phone}</td>
                    <td>{provider.service}</td>
                    <td>
                    
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No service providers available.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
