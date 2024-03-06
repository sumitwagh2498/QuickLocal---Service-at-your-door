import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, NavbarBrand } from 'react-bootstrap';
import NavigationBarOfUser from './NavigationBarOfUser';

function BookedOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:9191/orders/all'); // Update with your backend server URL
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleUpdateOrder = async (orderId) => {
    try {
      const response = await axios.put(`http://localhost:9191/orders/update/${orderId}`); // Update with your backend server URL and data
      console.log('Updated order:', response.data);
      // Refresh orders
      fetchOrders();
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      const response = await axios.delete(`http://localhost:9191/orders/delete/${orderId}`); // Update with your backend server URL
      console.log('Deleted order:', response.data);
      // Refresh orders
      fetchOrders();
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <>
    <NavigationBarOfUser/>
    <div>
      <h1>Orders</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Pin Code</th>
            <th>Email</th>
            <th>Available Date</th>
            <th>Available Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.phone}</td>
              <td>{order.address}</td>
              <td>{order.pinCode}</td>
              <td>{order.email}</td>
              <td>{order.availableDate}</td>
              <td>{order.availableTime}</td>
              <td>
                <Button variant="primary" onClick={() => handleUpdateOrder(order.id)}>Update</Button>
                <Button variant="danger" onClick={() => handleDeleteOrder(order.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  );
}

export default BookedOrder;
