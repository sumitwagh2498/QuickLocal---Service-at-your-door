import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBarOfService from './NavigationBarOfService';

const UserOrdersOnService = ({ serviceProviderId }) => {

  const serviceProviderNewId = sessionStorage.getItem('serviceProvider');

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    console.log('serviceProviderId:', serviceProviderId);
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:9191/service-provider/orders/${serviceProviderNewId}`);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [serviceProviderId]);

  const handleRejectOrder = async (orderId) => {
    try {
      const response = await axios.put(`http://localhost:9191/service-provider/orders/reject/${orderId}`);
      console.log(response.data);
      setOrders(orders.map(order => {
        if (order.id === orderId) {
          return { ...order, status: 'Rejected' };
        }
        return order;
      }));
    } catch (error) {
      console.error('Error rejecting order:', error);
    }
  };

  const handleAcknowledgeEmail = async (orderId) => {
    try {
      const response = await axios.post(`http://localhost:9191/send-email/${orderId}`);
      console.log(response.data);
      setOrders(orders.map(order => {
        if (order.id === orderId) {
          return { ...order, acknowledgmentEmailSent: true };
        }
        return order;
      }));
    } catch (error) {
      console.error('Error sending acknowledgment email:', error);
    }
  };

  return (
    <>
      <NavigationBarOfService />
      <div className="orders-container">
        <h2>Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Pin Code</th>
              <th>Available Date</th>
              <th>Available Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.phone}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>{order.pinCode}</td>
                <td>{order.availableDate}</td>
                <td>{order.availableTime}</td>
                <td>{order.status}</td>
                <td>
                  {order.status !== 'Rejected' && (
                    <>
                      <button className="btn btn-danger" onClick={() => handleRejectOrder(order.id)}>Reject</button>
                      {!order.acknowledgmentEmailSent && (
                        <button className="btn btn-success" onClick={() => handleAcknowledgeEmail(order.id)}>Send Acknowledgment Email</button>
                      )}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserOrdersOnService;
