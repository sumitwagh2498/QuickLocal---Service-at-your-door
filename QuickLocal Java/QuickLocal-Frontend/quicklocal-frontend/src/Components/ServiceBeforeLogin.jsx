import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import img1 from '../Images/HomeBeforeLogin/laundry1.jpg';
import img2 from '../Images/HomeBeforeLogin/D.jpg';
import img3 from '../Images/HomeBeforeLogin/C.jpg';
import img4 from '../Images/HomeBeforeLogin/L.jpg';
import img5 from '../Images/HomeBeforeLogin/P.jpg';
import img6 from '../Images/HomeBeforeLogin/E.jpg';
import { LinkContainer } from 'react-router-bootstrap';
import NavigationBar from './NavigationBar';

export function ServiceBeforeLogin() {
    const cardsData = [
        {
            title: 'Sewing and Stitching Service',
            image: img1,
            content: 'Provides custom sewing and stitching services for various fabric items.',
        },
        {
            title: 'Dry Cleaning Service',
            image: img2,
            content: 'Provides professional dry cleaning for clothing items. residential or commercial properties.',
        },
        {
            title: 'Clothing Alteration Service',
            image: img3,
            content: 'Offers tailoring services for alterations and repairs to garments.',
        },
        {
            title: 'Laundry Pickup and Delivery',
            image: img4,
            content: 'Picks up dirty laundry from customers homes and delivers clean, freshly laundered clothes',
        },
        {
            title: 'Pipe Installation and Repair Service',
            image: img5,
            content: 'Specializes in installing and repairing pipes for residential or commercial properties.',
        },
        {
            title: 'Electrical Repair Service',
            image: img6,
            content: 'Specializes in electrical repairs, installations, and maintenance for residential and commercial properties.',
        },
    ];

    return (
        <>
        <NavigationBar/>
        <Row xs={1} md={3} className="g-4 mx-auto mt-4" >
            {cardsData.map((card, idx) => (
                <Col key={idx} className="mb-3">
                    <Card style={{ width: '16rem', height: 'auto', margin: '0.5rem', boxShadow: '0 8px 18px rgba(0,0,0,0.3)' }} className="mx-auto my-4">
                        <Card.Img variant="top" src={card.image} style={{ height: '200px', objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.content}</Card.Text>
                            <LinkContainer to="/orders">
                                <Button variant="primary">Book</Button>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        </>
    );
}



