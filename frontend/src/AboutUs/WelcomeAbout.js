import React from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import StrippedContainter from "../Layout/StrippedContainer";

const WelcomeAbout = () => {
  return (
    <>
      <StrippedContainter>
        <Container className="" style={{ marginTop: "8.5%" }}>
          <h2 className="hero-text" style={{fontSize: "5em", color: "#91865c", fontFamily: "Syne"}}>
            Welcome to our website!
          </h2>
          <h6
              style={{
                fontSize: "1.2em",
                color: "#91865c",
                fontFamily: "Syne",
                fontWeight: "bold"
              }}
            >PLANNING A TRIP WAS NEVER THIS EASY.</h6>
        </Container>
      </StrippedContainter>
    </>
  );
};

export default WelcomeAbout;
