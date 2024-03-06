import React, { useState } from 'react';
import axios from 'axios';
import NavigationBarOfUser from './NavigationBarOfUser';
import styles from "../Style/OrderForm.css";

function OrderForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [availableDate, setAvailableDate] = useState('');
    const [availableTime, setAvailableTime] = useState('');

    const handleSubmit = async () => {
        try {
            const orderResponse = await axios.post('http://localhost:9191/orders/place/1', {
                name,
                phone,
                email,
                address,
                pinCode,
                availableDate,
                availableTime
            });
            console.log('Order placed successfully:', orderResponse.data);
            resetForm();
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    const resetForm = () => {
        setName('');
        setPhone('');
        setEmail('');
        setAddress('');
        setPinCode('');
        setAvailableDate('');
        setAvailableTime('');
    };

    return (
        <>
            <NavigationBarOfUser />
            <div className="container">
                <h2 className="mb-4">Order Form</h2>
                <form className="order-form">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone:</label>
                        <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address:</label>
                        <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pinCode" className="form-label">Pin Code:</label>
                        <input type="text" className="form-control" id="pinCode" value={pinCode} onChange={(e) => setPinCode(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="availableDate" className="form-label">Available Date:</label>
                        <input type="date" className="form-control" id="availableDate" value={availableDate} onChange={(e) => setAvailableDate(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="availableTime" className="form-label">Available Time:</label>
                        <input type="time" className="form-control" id="availableTime" value={availableTime} onChange={(e) => setAvailableTime(e.target.value)} required />
                    </div>
                    <button type="button" className="btn btn-primary me-2" onClick={handleSubmit}>Submit</button>
                    <button type="button" className="btn btn-secondary" onClick={resetForm}>Reset</button>
                </form>
            </div>
        </>
    );
}

export default OrderForm;
