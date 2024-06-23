import React from "react";
import { Container, Row } from "react-bootstrap";
import StrippedContainter from "../Layout/StrippedContainer";

const Info2 = () => {
  return (
    <>
      <Container fluid>
        <StrippedContainter vh="56.8vh">
          <Container className="w-75 p-5">
            <Row className="my-5">
              <p style={{ fontSize: "1.6em", fontFamily: "Syne" }}>
                Our application is designed to be your trusted companion as you
                immerse yourself in the stories etched in stone, the echoes of
                ancient civilizations, and the architectural marvels that define
                Macedonia's identity. Discover the beauty of our heritage as you
                traverse through centuries-old monuments, each narrating a
                unique chapter of our history.
              </p>
            </Row>
            <Row>
              <p style={{ fontSize: "1.6em", fontFamily: "Syne" }}>
                Whether you are drawn to the grandeur of ancient ruins, the
                intricate details of medieval fortresses, or the artistic
                brilliance of historical landmarks, our application provides a
                curated guide to ensure an enriching and memorable experience.
                Navigate effortlessly through the app to find detailed
                information about each monument, including its historical
                significance, architectural nuances, and practical tips for your
                visit.
              </p>
            </Row>
          </Container>
        </StrippedContainter>
      </Container>
    </>
  );
};

export default Info2;
