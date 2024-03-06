import {
    Button, Card, Col, Row, Carousel,
    Container, Image, Figure, Nav, Navbar,
    NavDropdown, Form
  } from 'react-bootstrap';
export function UserDashBoard(){
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <img
              alt="logo"
              src="https://blog.urbancompany.com/wp-content/themes/urban-company/images/whitelogo.png"
              width="100"
              height="30"
              className="d-inline-block align-top"
            />
            <div></div>
          <Navbar.Brand href="#home">USER</Navbar.Brand>
          <Nav className="me-auto">
         
           
            <Nav.Link href="#features"> Services</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>

            <NavDropdown title="check services at your city" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Admin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Service Provider
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">User</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sign Up
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
        </Container>
      </Navbar>
      <div style={{height:'60px'}}>

      </div>
      
      {/* --------------------------page------------------------- */}
        <Container>
      <Row>
        <Col xs={3} md={3}>
          <Image src="https://hometriangle.com/web/assets/images/2x-600x400/webp/cleaning-index.webp" rounded
          style={{ width: '171px', height: '180px' }}  />
          <Figure.Caption  className="text-center">
          cleaning service
      </Figure.Caption>
        </Col>

        <Col xs={3} md={3}>
          <Image src="https://hometriangle.com/web/assets/images/2x-600x400/webp/ac-repair-1.webp" rounded
          style={{ width: '171px', height: '180px' }}  />
          <Figure.Caption  className="text-center">
          AC Cleaning
      </Figure.Caption>
        </Col>

        <Col xs={3} md={3}>
          <Image src="https://hometriangle.com/web/assets/images/2x-600x400/webp/deep-house-cleaning-2.webp" rounded
          style={{ width: '171px', height: '180px' }}  />
          <Figure.Caption  className="text-center">
          Deep House Cleaning
      </Figure.Caption>
        </Col>

        <Col xs={3} md={3}>
          <Image src="https://hometriangle.com/web/assets/images/2x-600x400/webp/pest-control-2.webp" rounded
          style={{ width: '171px', height: '180px' }}  />
          <Figure.Caption  className="text-center">
          Pest Control
      </Figure.Caption>
        </Col>
        </Row>
        </Container>
        <div style={{height:'90px'}}></div>

        {/* //------------------------------icons-------------------------- */}

        <Container>
      <Row >
        <Col xs={2} md={2}>
        <button  style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
          <Image src="https://cdn-icons-png.flaticon.com/128/360/360433.png" rounded
          style={{ width: '80px', height: '80px' }}  />
          <Figure.Caption >
          carpentery
      </Figure.Caption>
      </button>
        </Col>

        <Col xs={2} md={2}>
        <button  style={{ border: 'none', background: 'none', padding: '0px', cursor: 'pointer' }}>
          <Image src="https://cdn-icons-png.flaticon.com/128/312/312971.png" rounded
          style={{ width: '80px', height: '80px' }}  />
          <Figure.Caption>
          plumbing
      </Figure.Caption>
      </button>
        </Col>

        <Col xs={2} md={2}>
        <button  style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
          <Image src="https://cdn-icons-png.flaticon.com/128/2946/2946701.png" rounded
          style={{ width: '80px', height: '80px' }}  />
          <Figure.Caption >
          Deep House Cleaning
      </Figure.Caption>
      </button>
        </Col>

        <Col xs={2} md={2}>
        <button  style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
          <Image src="https://cdn-icons-png.flaticon.com/128/3186/3186011.png" rounded
          style={{ width: '80px', height: '80px' }}  />
          <Figure.Caption>
          Pest Control
      </Figure.Caption>
      </button>
        </Col>

        <Col xs={2} md={2}>
        <button  style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
          <Image src="https://cdn-icons-png.flaticon.com/128/4598/4598734.png" rounded
          style={{ width: '80px', height: '80px' }}  />
          <Figure.Caption >
          Electrial Repairs
      </Figure.Caption>
      </button>
        </Col>

        <Col xs={2} md={2}>
        <button  style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
          <Image src="https://cdn-icons-png.flaticon.com/128/7305/7305214.png" rounded
          style={{ width: '80px', height: '80px' }}  />
          <Figure.Caption>
          Spa
      </Figure.Caption>
      </button>
        </Col>
        </Row>
        </Container>
      
       {/* ------------------------carousel-------------------- */}

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Carousel style={{ width: '770px', height: '250px'}}>
      <Carousel.Item>
      <img
         style={{ height: '300px' }}
          className="d-block w-100"
          src="https://hometriangle.com/web/assets/images/2x-600x400/webp/washing-machine-repair-1.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Washing Machine Repair</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
         style={{ height: '300px' }}
          className="d-block w-100"
          src="https://hometriangle.com/web/assets/images/2x-600x400/webp/refrigerator.webp"
          alt="Refrigerator Rapair"
        />
        <Carousel.Caption>
          <h3>Refrigerator Rapair</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          style={{ height: '300px' }}
          className="d-block w-100"
          src="https://hometriangle.com/web/assets/images/2x-600x400/webp/tank-cleaning-2.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Water Tank Cleaning</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    {/* ----------------------------cards----------------------------- */}


    <div style={{height:'30px'}}></div>
    <Row>
        <Col>
        <Card style={{ width: '250px',marginLeft:'50px' }}>
      <Card.Body>
        <img
        style={{ height: '200px',width:'200px' }}
        src="https://img.freepik.com/free-photo/woman-nail-salon-receiving-manicure-by-beautician-beauty-treatment-concept_186202-8769.jpg?w=740&t=st=1703775480~exp=1703776080~hmac=ad4736c5fade0931d0214e255c9541cbc544c44fe9a906d4d4ed2fc839a520b1"
        alt="maincure"/>
        <Card.Title>Manicure and Pedicure</Card.Title>
        
      </Card.Body>
    </Card></Col>
    <Col>
    <Card style={{ width: '250px' }}>
      <Card.Body>
        <img
        style={{ height: '200px',width:'200px' }}
        src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1701149688871-2980d1.jpeg"
        alt="socket"/>
        <Card.Title>Switch Socket Replacement</Card.Title>
        
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '250px'}}>
      <Card.Body>
        <img
        style={{ height: '200px',width:'200px' }}
        src="https://img.freepik.com/free-photo/checking-conditioner_1098-17787.jpg?w=740&t=st=1703776566~exp=1703777166~hmac=29106f14e5e91e9c3dae5063d11266c98e88d2ae9f0ac2a6782d141722153c62"
        alt="ac"/>
        <Card.Title>AC Cleaning Serives</Card.Title>
        
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '250px'}}>
      <Card.Body>
        <img
        style={{ height: '200px',width:'200px' }}
        src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700142017541-7905b3.jpeg"
        alt="maincure"/>
        <Card.Title>Washing Machine Repair</Card.Title>
        
      </Card.Body>
    </Card>
    </Col>
    </Row>
    
  );

    </>
    );

}




