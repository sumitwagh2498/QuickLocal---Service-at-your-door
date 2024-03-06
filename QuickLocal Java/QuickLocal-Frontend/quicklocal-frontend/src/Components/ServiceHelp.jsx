import { Accordion } from "react-bootstrap";
import { Style } from '../Style/ServiceHelp.css';
import { NavigationBarOfService } from "./NavigationBarOfService";

export const ServiceHelp = () => {
  return (
    <>
    <NavigationBarOfService/>
    <div className="conatiner">
      <h2 className="ser-title" style={{ justifyContent: 'center', textAlign: 'center', marginTop: '35px', marginBottom: '35px' }}>OUR SERVICES</h2>
      <Accordion className="servies" style={{marginBottom: '45px', marginLeft: '25px', marginRight: '25px'}}>
        <Accordion.Item eventKey="0">
          <Accordion.Header><h6>Home Eye Check-up</h6>
          </Accordion.Header>
          <Accordion.Body> Offer customers the convenience of scheduling professional eye tests at home.
            This service can attract individuals who might find it difficult to visit physical stores.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h6>Frame Trial at Home</h6>
          </Accordion.Header>
          <Accordion.Body>
            Provide a service where customers can select a few frames to be delivered to their home for a trial period.
            This allows them to physically try on different styles and choose the ones they like best.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h6>Expert Consultation:</h6>
          </Accordion.Header>
          <Accordion.Body>
            Offer live chat or video calls with eyewear specialists who can assist customers in choosing the right frames,
            understanding lens options, or addressing any queries they might have.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h6>Customized Lenses:</h6>
          </Accordion.Header>
          <Accordion.Body>
            Provide options for customized lenses such as blue light protection, anti-glare coatings,
            or lenses tailored to specific prescriptions.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h6>Customized Lenses:</h6>
          </Accordion.Header>
          <Accordion.Body>
            Provide options for customized lenses such as blue light protection, anti-glare coatings,
            or lenses tailored to specific prescriptions.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    </>
  );
};