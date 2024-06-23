import React from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import StrippedContainter from "../Layout/StrippedContainer";

const WelcomeMessage = () => {
  return (
    <>
      <StrippedContainter>
        <Container style={{ marginTop: "6%" }}>
          <h2 className="hero-text">
            HISTORICAL MONUMENTS, NATURAL BEAUTY AND A NUMBER OF OTHER FACTORS
            THAT WILL TAKE YOUR BREATH AWAY...VISIT MACEDONIA, THERE IS A LOT TO
            SEE, LEARN AND EXPERIENCE!
          </h2>
        </Container>
      </StrippedContainter>
    </>
  );
};

export default WelcomeMessage;
