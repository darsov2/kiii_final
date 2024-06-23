import React from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
// import "@fontawesome/css/all.min.css";
import "../HomePage/homePage.css";
import Nav from "react-bootstrap/Nav";
import { CgProfile } from "react-icons/cg";

import NavDropdown from "react-bootstrap/NavDropdown";
import Counter from "./Counter";
// import Navbar from "../Layout/Navbar;
// import NavbarCustom from "../Layout/Navbar";

const Hero = (props) => {
  return (
    <>
      <Container style={{ marginTop: "9%" }}>
        <h1
          className="visit-macedonia"
          dangerouslySetInnerHTML={{ __html: props.text }}
        ></h1>
        <h1 className="visit-macedonia"></h1>
      </Container>

      <Container style={{ marginTop: "18%" }}>
        <Row>
          <Col md="auto" className="my-auto">
            <Button className="button-white" href={'/plan#destinations'}>VIEW DESTINATIONS</Button>
          </Col>
          <Col></Col>
          {props.showStats === "true" && (
            <>
              <Col>
                <Counter start={0} end={750}></Counter>
                 {/*<span className="footer-number">5345</span> */}
                <br />
                <span className="footer-numbers">historical monuments</span>
              </Col>
              <Col
                style={{
                  borderRight: "2px solid white",
                  borderLeft: "2px solid white",
                }}
              >
                <Counter start={0} end={125}></Counter>
                 {/*<span className="footer-number">1234</span> */}
                <br />
                <span className="footer-numbers">things to do</span>
              </Col>
              <Col>
                <Counter start={0} end={5}></Counter>
                {/* <span className="footer-number">1234</span> */}
                <br />
                <span className="footer-numbers">team members</span>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Hero;
