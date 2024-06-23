import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Info1 = () => {
  return (
    <>
      <Container className="w-75 my-3 py-3">
        <Row>
          <Col>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_map_of_North_Macedonia.svg/2560px-Flag_map_of_North_Macedonia.svg.png"
              style={{ height: "28vh" }}
              className="img-fluid"
            ></Image>
          </Col>
          <Col className="d-flex flex-col align-items-center">
            <p style={{ fontSize: "1.4em", fontFamily: "Syne" }}>
              Welcome to our website, your gateway to the rich tapestry of
              cultural and historical wonders that Macedonia has to offer. As
              the proud stewards of this nation's incredible legacy, we invite
              you to embark on a journey through time, exploring the diverse
              array of cultural and historical monuments that grace our
              landscapes.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Info1;
