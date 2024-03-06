import React from 'react';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import NavigationBar from '../Components/NavigationBar'; // Replace with the correct path
import '../Style/About.css';
import img1 from '../Images/About/img.jpg';
import person1 from '../Images/OurTeam/NK.png';
import person2 from '../Images/OurTeam/S-C.png';
import person3 from '../Images/OurTeam/SN.png';
import person4 from '../Images/OurTeam/ZM.png';
import person5 from '../Images/OurTeam/SW.png';

export const AboutUs = () => {
  const cardsData = [
    {
      title: 'Nayan Khade',
      image: person1,
      content: 'Student at CDAC Juhu',
      instagram: 'https://www.instagram.com/instagram/',
      linkedin: 'www.linkedin.com/in/aishwarya-pusadkar-70a4b11b7',
    },
    {
      title: 'Samiksha Choudhari',
      image: person2,
      content: 'Student at CDAC Kharghar.',
      instagram: 'https://www.instagram.com/_nayankhade_/',
      linkedin: 'https://www.linkedin.com/in/thenayankhade/',
    },
    {
      title: 'Shubham Nangare',
      image: person3,
      content: 'Student at CDAC JUHU.',
      instagram: 'https://www.instagram.com/instagram/',
      linkedin: 'https://www.linkedin.com/in/priyal-wadhwani-716904164/',
    },
    {
      title: 'Zeenat Mariyam',
      image: person4,
      content: 'Student at CDAC Kharghar',
      instagram: 'https://www.instagram.com/instagram/',
      linkedin: 'https://www.linkedin.com/in/person4/',
    },
    {
      title: 'Sumit Wagh',
      image: person5,
      content: 'Student at CDAC Kharghar',
      instagram: 'https://www.instagram.com/instagram/',
      linkedin: 'https://www.linkedin.com/in/person5/',
    },
  ];

  return (
    <>
      <NavigationBar />
      <div className="about-us" style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
        <div className="container mx-auto text-center" style={{ boxShadow: '0 2px 18px rgba(0,0,0,0.2)', margin: '0 10px', backgroundColor: 'white', padding: '20px' }}>
          <h2 className="mb-4">Who we are</h2>
          <p>
            Urban Company is a technology platform offering a variety of services at home. Customers use our platform to book services such as beauty treatments, haircuts, massage therapy, cleaning, plumbing, carpentry, appliance repair, painting, etc. These services are delivered in the comfort of their home and at a time of their choosing. We promise our customers a high-quality, standardized, and reliable service experience. To fulfill this promise, we work closely with our hand-picked service partners, enabling them with technology, training, products, tools, financing, insurance, and brand, helping them succeed and deliver on this promise.
          </p>
        </div>

        <div className="carousel-container">
          {/* Add your carousel content here */}
        </div>

        <Row className="mission-values" style={{ boxShadow: '0 2px 18px rgba(0,0,0,0.2)', margin: '0 13px', marginTop: '25px', backgroundColor: 'white', padding: '20px' }}>
          <Col md={6} style={{ paddingTop: 13 }}>
            <h2>Our Mission and Values</h2>
            <p>
              At LensJoy, our mission is to provide high-quality eyewear to our customers with innovative technology and exceptional service. We believe in making eyewear accessible, affordable, and fashionable for everyone.<br></br>
              An aim to provide every Indian access to high-quality designer glasses without shelling out their pocket.
            </p>
            <ul className="values-list">
              <li>Customer Satisfaction</li>
              <li>Innovation</li>
              <li>Accessibility</li>
            </ul>
          </Col>

          <Col md={6} className='img'>
            <img
              src={img1}
              className="img-fluid"
              alt="LensJoy Sunglasses"
            />
          </Col>
        </Row>
        <h3 className='team-h contact-text' style={{ textAlign: 'center', marginTop: '35px' }}>OUR TEAM</h3>
        <Row xs={1} md={3} className='g-4 mx-auto'>
          {cardsData.map((card, idx) => (
            <Col key={idx} className='mb-3'>
              <Card style={{ width: '16rem', height: 'auto', margin: '0.5rem', boxShadow: '0 2px 18px rgba(0,0,0,0.2)' }} className='mx-auto my-4'>
                <Card.Img variant='top' src={card.image} style={{ height: '270px', width: '100%', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.content}</Card.Text>
                  <div className='d-flex justify-content-center mx-auto fab-icon'>
                    <a href={card.instagram} target='_blank' rel='noopener noreferrer' className='mx-2'>
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href={card.linkedin} target='_blank' rel='noopener noreferrer' className='mx-2'>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
