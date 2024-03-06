import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import styles from '../Style/homeBeforeLogin.css';
import img1 from '../Images/HomeBeforeLogin/broker.jpg';
import img2 from '../Images/HomeBeforeLogin/laundry1.jpg';
import img3 from '../Images/HomeBeforeLogin/plumber.jpg';
import img4 from '../Images/HomeBeforeLogin/laundry2.jpg';
import img5 from '../Images/HomeBeforeLogin/tailor.jpg';
import i1 from '../Images/HomeBeforeLogin/bathroomService.jpg';
import i2 from '../Images/HomeBeforeLogin/Massage.jpg';
import i3 from '../Images/HomeBeforeLogin/wedding.jpg';
import adv from '../Images/HomeBeforeLogin/adv.jpg'
import NavigationBar from './NavigationBar';

const cardData = [
  { image: img1, text: 'Broker Services' },
  { image: img2, text: 'Laundry Service' },
  { image: img3, text: 'Plumbing Service' },
  { image: img4, text: 'Ironing Service' },
  { image: img5, text: 'Tailor Service' },
];

const images = [i1, i2, i3];

export function HomeBeforeLogin() {
  return (
    <div>
      <NavigationBar />
      <div className={`d-flex ${styles.cardContainer}`} style={{ marginTop: '10px' }}>
        {cardData.map((card, index) => (
          <Card key={index} className={`${styles.card} mx-3`} style={{ width: '18rem', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Text className="cards-text" style={{ alignItems: 'center' }}>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className="d-flex justify-content-around">
        {images.map((image, index) => (
          <Card key={index} className="custom-card">
            <Card.Img variant="top" src={image} style={{ height: '200px' }} />
          </Card>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '38px', marginBottom: '35px' }}>
        <h4>QuickLocal : Best Service Provider App</h4>
        <img
          src={adv}
          alt="As Seen On Karan Johar"
          style={{ marginBottom: '15px', width: '90%', maxWidth: '1200px', margin: '0 auto', boxShadow: '0 8px 18px rgba(0,0,0,0.3)' }}
        />
      </div>

    </div>
  );
}
