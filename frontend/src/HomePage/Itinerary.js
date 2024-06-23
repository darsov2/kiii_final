import React, { useState } from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./homePage.css";
const Itinerary = (props) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <>
      <Container
        fluid
        className="px-0 py-0 pe-3"
        style={{
          backgroundColor: "#f7f7f7",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <Row>
          <Col className="col-4">
            <Image
              className="w-100 h-100"
              style={{
                maxWidth: "100%",
                objectFit: "cover",
                overflow: "hidden",
              }}
              src={props.img}
            />
          </Col>
          <Col className="col-8">
            <Row>
              <h1 className="text-start">{props.title}</h1>
            </Row>
            <Row>
              <p style={{ textAlign: "justify" }}>
                {!showFullDesc && props.description.substring(0, 350)}
                {showFullDesc && props.description}{" "}
              </p>
            </Row>
            {props.description.length > 350 && (
              <Row>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setShowFullDesc((prev) => !prev);
                  }}
                  href="#"
                  style={{ textDecoration: "none", textAlign: "left" }}
                >
                  Read More
                </a>
              </Row>
            )}
            <Row className="pb-2">
              <Button
                className="w-25"
                href={`/itineraries/${props.planId}`}
                style={{ backgroundColor: "#66a792", color: "white", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", border:"none" }}
              >
                See Full Itinerary &gt;
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Itinerary;
