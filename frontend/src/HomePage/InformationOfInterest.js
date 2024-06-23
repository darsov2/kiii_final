import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Information from "./information";

const InformationOfInterest = () => {
  return (
    <>
      <Container
        fluid
        className="p-5 my-5"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <Row className="mb-3">
          <h1 className="mb-3" style={{ textAlign: "left" }}>
            Other information of interest
          </h1>
          <hr
            style={{
              maxWidth: "7%",
              border: "3px solid #fdc40a",
              opacity: "1",
            }}
          />
        </Row>

        <Row>
          <Col>
            <Information img="https://mytravelleader.com/wp-content/uploads/2023/10/Discovering-Lake-Ohrid-a-budget-friendly-gem-in-North-Macedonia.jpg" />
          </Col>
          <Col>
            <Information img="https://www.deutschland.de/sites/default/files/styles/image_carousel_mobile/public/media/image/Macedonia-Greece-Civil-Society-Forum-friedrich-ebert-stiftung.jpg?itok=mF5dRjv4" />
          </Col>
          <Col>
            <Information img="https://www.euractiv.com/wp-content/uploads/sites/2/2022/02/shutterstock_1638841513.png" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InformationOfInterest;
